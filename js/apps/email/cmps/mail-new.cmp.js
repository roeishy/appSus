export default {
    props: ['user'],
    template: `
        <section class="mail-new">
        <form @submit.prevent="sendMail">
                <label for="to">
                    to:
                    <input v-model="newMail.to" type="text" id="to" required>
                </label>
                <label for="pass">
                    subject:
                    <input v-model="newMail.subject" type="text" id="subject" required>
                </label>
                <label for="body">
                    body:
                    <textarea v-model="newMail.body" type="text" id="body" required></textarea>
                </label>
                <button >Send</button>
            </form>
        </section>
    `,
    components: {

    },
    data() {
        return {
            newMail: {
                from: {
                    userId: '',
                    userName: ''
                },
                to: '',
                subject: '',
                body: ''
            }
        };
    },
    mounted() {

    },
    created() {
        this.newMail.from.userId = this.user.userId
    },
    methods: {
        sendMail() {
            console.log('sending');
            this.$emit('sendMail', this.newMail);
        }
    },
    computed: {

    }
};
