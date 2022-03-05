import mailBody from "./mail-body.cmp.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-read">
            <div class="mail-read-sub-btns">
                <div class="mail-read-sub">
                        {{mail.subject}}
                </div>
                <div class="mail-read-btns">
                        <button @click="trash"><img src="../imgs/trash.PNG"></button>
                        <button @click="close"><img src="../imgs/back.PNG"></button>
                </div>
            </div>
            <div class="mail-read-from-date">
                <div class="mail-read-from">
                    From: {{mail.from.userName}}
                </div>
                <div class="mail-read-date">
                    At: {{date}}
                </div>
            </div>
            <div class="mail-read-body">
                {{mail.body}}
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