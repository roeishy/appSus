import { userService } from '../../login/services/userService.js'
import { mailService } from '../services/mailService.js';
import { utilService } from '../../../services/util-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import foldersList from '../cmps/folders-list.cmp.js';
import mailNew from '../cmps/mail-new.cmp.js';
import mailRead from '../cmps/mail-read.cmp.js';


export default {
    template: `
    <section v-if="user" class="mail-app">
     <div class="row">
         <div class="col-12 border border-dark">
         <h1>email </h1>
         <p>welcome {{user.userName}} !</p>
         </div>
     </div>
     <div class="row">
         <div class="col-3 border border-dark">
            <folders-list @read="read" @newMail="newMail" :userId="id" />
         </div>
         <div class="col-9 border border-dark">
         <mail-list @read="read" @trash="trash" v-if="showList" :mails="mailsForDisplay" />
         <mail-new @sendMail="sendMail" v-if="showNewMail" :user="user" />
         <mail-read @trash="trash" @close="closeMail" v-if="showMail" :mail="selectedMail" />
         </div>
     </div>
        </section>
    `,
    components: {
        mailList,
        foldersList,
        mailNew,
        mailRead,
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
            this.showList = this.showNewMail ? true : false
            this.showMail = false;
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
        },
        closeMail() {
            this.showMail = false
            this.showList = !this.showList
        }
    },
    computed: {
        allUsers() {
            return userService.query()
                .then(users => this.users = users);
        },
        mailsForDisplay() {
            if (this.filtserBy === 'sent') {
                return this.mails.filter(mail => {
                    console.log('filtered:sent');
                    this.$route.params.folder = 'sent'
                    return (mail.from.userId === this.user.id && !mail.isTrash)
                })
            }
            if (this.filtserBy === 'inbox') {
                return this.mails.filter(mail => {
                    console.log('filtered:inbox');
                    this.$route.params.folder = 'inbox'
                    return (mail.to === this.user.userName && !mail.isTrash)
                })
            }
            if (this.filtserBy === 'trash') {
                return this.mails.filter(mail => {
                    console.log('filtered:trash');
                    this.$route.params.folder = 'trash'
                    return ((mail.from.userId === this.user.id || mail.to === this.user.userName) && mail.isTrash)
                })
            }
        }
    }
};
