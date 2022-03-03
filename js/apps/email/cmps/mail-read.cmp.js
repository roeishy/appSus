import mailBody from "./mail-body.cmp.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-read">
            <div class="">
                <div class="">
                    {{mail.from.userName}}
                </div>
                <div class="">
                    {{mail.subject}}
                </div>
                <div class="">
                    {{mail.body}}
                </div>
                <div class="">
                    {{date}}
                </div>
                <div class="">
                    <button @click="trash">delete</button>
                    <button @click="close">x</button>
                </div>
            </div>
        </section>
    `,
    components: {
        mailBody
    },
    data() {
        return {}
    },
    created() { },
    methods: {
        trash() {
            this.$emit('trash', this.mail)
            this.close()
        },
        close() {
            this.$emit('close')
        }
    },
    computed: {
        date() {
            var dateObject = new Date(this.mail.sentAt)
            const humanDateFormat = dateObject.toLocaleString()
            return humanDateFormat
        }
    }
}