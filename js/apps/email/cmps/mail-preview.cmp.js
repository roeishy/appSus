import mailBody from "./mail-body.cmp.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            
                <div class="from" @click="read" >
                    {{mail.from.userName}}
                </div>
                <div class="sub-body"  @click="read">
                    <div class="subject" @click="read" >
                        {{mail.subject}} - 
                    </div>
                    <div class="body" @click="read" >
                        <mail-body :body="mail.body" />
                    </div>
                </div>
                <div class="date" @click="read" >
                    {{date}}
                </div>
                <div class="mail-btns" id="mail-btns" >
                    <button class="" @click="trash">🗑</button>
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
        },
        read() {
            this.$emit('read', this.mail)
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