import mailBody from "./mail-body.cmp.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <div class="row">
                <div>
                    {{mail.from.userName}}
                </div>
                <div>
                    {{mail.subject}}
                </div>
                <div>
                    <mail-body :body="mail.body" />
                </div>
                <div>
                    {{date}}
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
    },
    computed: {
        date() {
            var dateObject = new Date(this.mail.sentAt)
            const humanDateFormat = dateObject.toLocaleString()
            return humanDateFormat
        }
    }
}