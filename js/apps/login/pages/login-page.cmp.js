import { userService } from '../services/userService.js'
import loginPage from '../cmps/login-page.cmp.js';
import signUpPage from '../cmps/sign-up-page.cmp.js';

export default {
    template: `
        <section class="home-page app-main">
            <login-page v-if="isLogin" :users="allUsers" @login="login" @newUser="newUser"/>
            <sign-up-page v-if="isSignUp" :users="allUsers" @signUp="signUp" />
        </section>
    `,
    components: {
        loginPage,
        signUpPage,
    },
    data() {
        return {
            isLogin: true,
            isSignUp: false,
        };
    },
    created() {
    },
    methods: {
        login(inputUser) {
            var idx = this.users.findIndex(user => user.userName === inputUser.userName)
            if (idx >= 0 && this.users[idx].pass === inputUser.pass) {
                userService.logIn(this.users[idx].id)
                console.log('loged in!!!');
                this.$router.push('/home/' + this.users[idx].id)
            }
        },
        signUp(inputUser) {
            var user = userService.createUser(inputUser.userName, inputUser.pass)
            this.users.push(user)
            this.isLogin = true
            this.isSignUp = false
        },
        newUser() {
            this.isLogin = false
            this.isSignUp = true
        }
    },
    computed: {
        allUsers() {
            return userService.query()
                .then(users => this.users = users);
        }
    },
}