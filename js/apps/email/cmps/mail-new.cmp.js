export default {
    props: ['user'],
    template: `
        <section class="mail-new">
            <form @submit.prevent="sendMail" autocomplete="off">
                <div class="new-mail-head">
                    <h1>New Message</h1>
                    <button @click.prevent="close"><img src="https://www.gstatic.com/images/icons/material/system/2x/arrow_back_black_20dp.png"></button>
                </div>
                <label for="to">
                    <input class="new-mail-to" v-model="newMail.to" type="text" id="to" placeholder="to:" required>
                </label>
                <label for="subject">
                    <input class="new-mail-subject" v-model="newMail.subject" type="text" id="subject" placeholder="subject:" required>
                </label>
                <label for="body">
                    <textarea class="new-mail-body" v-model="newMail.body" type="text" id="body" placeholder="" required></textarea>
                </label>
                <button class="new-mail-send">Send</button>
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
        this.newMail.from.userId = this.user.id
        this.newMail.from.userName = this.user.userName

    },
    methods: {
        sendMail() {
            console.log('sending');
            console.log(this.newMail);
            this.$emit('sendMail', this.newMail);
        },
        close() {
            this.$emit('closenewMail');
        }
    },
    computed: {

    }
};
