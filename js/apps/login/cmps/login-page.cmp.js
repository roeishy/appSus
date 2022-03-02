export default {
    props: ['users'],
    template: `
        <section class="login-page">
            <h3>login</h3>
            <form @submit.prevent="login">
                <label for="uName">
                    user name:
                    <input v-model="user.userName" type="text" id="uName" required>
                </label>
                <label for="pass">
                    password:
                    <input v-model="user.pass" type="text" id="pass" required>
                </label>
                <button >Send</button>
            </form>
            <button @click="signUp" >Sign Up!</button>
        </section>
    `,
    data() {
        return {
            user:
            {
                userName: '',
                pass: '',
            }
        };
    },
    created() {
    },
    methods: {
        login() {
            this.$emit('login', this.user);
        },
        signUp() {
            this.$emit('newUser');
        },
    },
    computed: {
    },
}