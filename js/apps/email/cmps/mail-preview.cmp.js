import mailBody from "./mail-body.cmp.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <div class="row text-center">
                <div class="col border border-dark">
                    {{mail.from.userName}}
                </div>
                <div class="col border border-dark">
                    {{mail.subject}}
                </div>
                <div class="col border border-dark">
                    <mail-body :body="mail.body" />
                </div>
                <div class="col border border-dark">
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