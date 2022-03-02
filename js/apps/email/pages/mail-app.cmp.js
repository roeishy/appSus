import { userService } from '../../login/services/userService.js'
import { mailService } from '../services/mailService.js';
import mailList from '../cmps/mail-list.cmp.js';
export default {
    template: `
        <section v-if="user" class="mail-app">
           <h1>email </h1>
           <p>welcome {{user.userName}} !</p>
           <mail-list :mails="mailsForDisplay" />
        </section>
    `,
    components: {
        mailList,
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
