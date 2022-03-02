import { userService } from '../services/userService.js'

export default {
    template: `
        <section v-if="user" class="home-page">
           <h1>welcome </h1>
           <p>{{user.userName}}</p>
           <router-link :to="'/mail/'+user.id">email</router-link> | 
            <router-link :to="'/keeps/'+user.id">keeps</router-link> |
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
        },
        // logedUser() {
        //     return userService.getLogedUser(this.id)
        //         .then(user => {
        //             return user
        //         })
        // },
    }
};
