export default {
    props: ['users'],
    template: `
        <section class="home-page app-main">
            <h3>sign up</h3>
            <form @submit.prevent="signUp">
                <label for="uName">
                    name:
                    <input v-model="user.userName" type="text" id="uName" required>
                </label>
                <label for="pass">
                    rate:
                    <input v-model="user.pass" type="text" id="pass" required>
                </label>
                <button >Send</button>
            </form>
            
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
        signUp() {
            this.users
                .then(res => {
                    var id = res.findIndex(user => user.userName === this.user.userName)
                    if (id === -1) {
                        console.log('creating user');
                        this.$emit('signUp', this.user);
                        return
                    }
                    console.log('NOT creating user ERROR');
                    return
                })
        }
    },
    computed: {
    },
}