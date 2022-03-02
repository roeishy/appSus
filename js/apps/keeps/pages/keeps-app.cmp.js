import { userService } from '../../login/services/userService.js'

export default {
    template: `
        <section v-if="user" class="mail-app">
           <h1>keeps </h1>
           <p>welcome {{user.userName}} !</p>
           
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
