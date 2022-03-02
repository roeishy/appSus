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
            <folders-list />
         </div>
         <div class="col-9 border border-dark">
         <mail-list :mails="mailsForDisplay" />
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
            // filtserBy: null
        };
    },
    mounted() {
        mailService.query()
            .then(mails => this.mails = mails);
    },
    created() {
        this.id = this.$route.params.userId;
        userService.getLogedUser(this.id)
            .then(user => {
                this.user = user
            })
    },
    methods: {
    },
    computed: {
        allUsers() {
            return userService.query()
                .then(users => this.users = users);
        },
        mailsForDisplay() {
            // if (!this.filterBy) return this.mails;
            // const regex = new RegExp(this.filterBy.vendor, 'i');
            console.log(this.user.userName);
            console.log(this.mails);
            return this.mails.filter(mail => {
                console.log('filtered:', this.user.userName);
                return mail.to === this.user.userName
            });
        }
    }
};
