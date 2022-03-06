import { userService } from '../services/userService.js'


export default {
    template: `
        <section v-if="user" class="home-page">
            <div class="home-page-bg">
                <h1 class="text-center p-3">Welcome To APPSUS System</h1>
                <p class="lead p-5">welcome {{user.userName}}</p>
            </div>
           
           <!-- <router-link :to="'/mail/'+user.id+'/inbox'">email</router-link> | 
            <router-link :to="'/keeps/'+user.id">keeps</router-link> | -->
        </section>
    `,
    components: {

    },
    data() {
        return {
            id: null,
            user: null,
            users: null,

        };
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
        }

        // logedUser() {
        //     return userService.getLogedUser(this.id)
        //         .then(user => {
        //             return user
        //         })
        // },
    }
};
