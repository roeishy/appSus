import { userService } from '../../login/services/userService.js'
import { mailService } from '../services/mailService.js';
import mailList from '../cmps/mail-list.cmp.js';
import foldersList from '../cmps/folders-list.cmp.js';



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
            <folders-list @newMail="newMail" :userId="id" />
         </div>
         <div class="col-9 border border-dark">
         <mail-list v-if="!showNewMail" :mails="mailsForDisplay" />
         </div>
     </div>
        </section>
    `,
    components: {
        mailList,
        foldersList,
    },
    data() {
        return {
            id: null,
            user: null,
            users: null,
            mails: null,
            filtserBy: null,
            showList: true,
            showNewMail: false,
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
                    return mail.from.userId === this.user.id
                })
            }
            if (this.filtserBy === 'inbox') {
                return this.mails.filter(mail => {
                    console.log('filtered:inbox');
                    this.$route.params.folder = 'inbox'
                    return mail.to === this.user.userName
                })
            }
        }
    }
};
