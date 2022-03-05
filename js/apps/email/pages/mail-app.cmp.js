import { userService } from '../../login/services/userService.js'
import { mailService } from '../services/mailService.js';
import mailList from '../cmps/mail-list.cmp.js';
import foldersList from '../cmps/folders-list.cmp.js';
import mailNew from '../cmps/mail-new.cmp.js';
import mailRead from '../cmps/mail-read.cmp.js';
import mailSortFilter from '../cmps/mail-sort-filter.cmp.js';

export default {
    template: `
    <section v-if="user" class="mail-app">
     <div class="logo-container">
         <div class="logo">{{logo}}</div>
     </div>
     <div class="sort-filter">
         <mail-sort-filter @sort="setSort" @search="setSearch" />
     </div>
         <div class="folders">
            <folders-list @read="read" @newMail="newMail" :userId="id" :unread="calcUnread" />
         </div>
         <div class="main">
            <mail-list @read="read" @trash="trash" v-if="showList" :mails="mailsForDisplay" />
            <mail-new @closenewMail="newMail" @sendMail="sendMail" v-if="showNewMail" :user="user" />
            <mail-read @trash="trash" @close="closeMail" v-if="showMail" :mail="selectedMail" />
         </div>
    </section>
    `,
    components: {
        mailList,
        foldersList,
        mailNew,
        mailRead,
        mailSortFilter,
    },
    data() {
        return {
            id: null,
            user: null,
            users: null,
            mails: null,
            filtserBy: null,
            showNewMail: false,
            selectedMail: null,
            showMail: false,
            showList: true,
            inboxCnt: null,
            draftsCnt: null,
            sortBy: 'sentAt',
            searchBy: null,
        };
    },
    mounted() {
        mailService.query()
            .then(mails => this.mails = mails);
    },
    created() {
        this.fetchData()
        userService.getLogedUser(this.id)
            .then(user => {
                this.user = user
            })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.id = this.$route.params.userId;
            this.filtserBy = this.$route.params.folder;
        },
        newMail() {
            console.log('new mail');
            this.showNewMail = !this.showNewMail
        },
        sendMail(mail) {
            mailService.createMail(this.user.id, this.user.userName, mail.subject, mail.body, mail.to)
            mail.sentAt = Date.now()
            this.mails.push(mail)
            this.newMail();
        },
        trash(trashMail) {
            const idx = this.mails.findIndex(mail => mail.id === trashMail.id)
            if (trashMail.isTrash) {
                console.log('remove p');
                mailService.remove(trashMail.id)
                this.mails.splice(idx, 1)
                return
            }
            console.log('trash');
            trashMail.isTrash = true;
            mailService.updateMail(trashMail)

            this.mails.splice(idx, 1, trashMail)
        },
        read(mail) {
            this.selectedMail = mail
            this.showMail = true
            this.showList = !this.showList
            mailService.updateMail(mail)
        },
        closeMail() {
            this.showMail = false
            this.showList = !this.showList
        },
        setSort(sortBy) {
            this.sortBy = sortBy;
        },
        setSearch(searchSTR) {
            this.searchBy = searchSTR;
        }
    },
    computed: {
        allUsers() {
            return userService.query()
                .then(users => this.users = users);
        },
        calcUnread() {
            return this.mails.filter(mail => {
                return (mail.to === this.user.userName && !mail.isTrash && !mail.isRead)
            }).length
        },
        mailsForDisplay() {
            if (this.filtserBy === 'sent') {
                return this.searchMails.filter(mail => {
                    console.log('filtered:sent');
                    this.$route.params.folder = 'sent'
                    return (mail.from.userId === this.user.id && !mail.isTrash)
                })
            }
            if (this.filtserBy === 'inbox') {
                return this.searchMails.filter(mail => {
                    console.log('filtered:inbox');
                    this.$route.params.folder = 'inbox'
                    return (mail.to === this.user.userName && !mail.isTrash)
                })
            }
            if (this.filtserBy === 'trash') {
                return this.searchMails.filter(mail => {
                    console.log('filtered:trash');
                    this.$route.params.folder = 'trash'
                    return ((mail.from.userId === this.user.id || mail.to === this.user.userName) && mail.isTrash)
                })
            }
        },
        sortedMails() {
            console.log('sorting by: ', this.sortBy);
            if (typeof this.mails[0][this.sortBy] === 'number') {
                return this.mails.sort((a, b) => b[this.sortBy] - a[this.sortBy])
            }
            if (typeof this.mails[0][this.sortBy] === 'string') {
                return this.mails.sort((a, b) => ('' + a[this.sortBy]).localeCompare('' + b[this.sortBy]))
            }
        },
        searchMails() {
            if (!this.searchBy) return this.sortedMails;
            const regex = new RegExp(this.searchBy, 'i');
            return this.sortedMails.filter(mail => regex.test(mail.subject));
        },
        logo() {
            return this.user.userName.charAt(0)
        }
    }
};
