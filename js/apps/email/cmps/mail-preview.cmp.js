import mailBody from "./mail-body.cmp.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview" :class="{'bold-text': !mail.isRead, 'mail-preview-read': !mail.isRead ,'mail-preview-unread': mail.isRead}">
                <div class="from" @click="read" >
                    {{mail.from.userName}}
                </div>
                <div class="sub-body"  @click="read">
                    <div class="bold-text"  >
                        {{mail.subject}} - 
                    </div>
                    <div class="body"  >
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
        return {

        }
    },
    created() { },
    methods: {
        trash() {
            this.$emit('trash', this.mail)
        },
        read() {
            this.mail.isRead = true
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