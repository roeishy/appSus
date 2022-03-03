import mailBody from "./mail-body.cmp.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <div class="mail row text-center border border-dark ">
            <div class="col-9">
                <div @click="read" class="row ">
                    {{mail.from.userName}}
                </div>
                <div @click="read" class="row ">
                    {{mail.subject}}
                </div>
                <div @click="read" class="row ">
                    <mail-body :body="mail.body" />
                </div>
            </div>
                <div @click="read" class="col-2 ">
                    {{date}}
                </div>
                <div id="mail-btns" class=" col-1">
                    <button class="btn btn-danger" @click="trash">🗑</button>
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