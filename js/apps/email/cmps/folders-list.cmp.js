
export default {
    template: `
        <section class="mail-preview">
            <div class="col text-center">
            <div class="row border border-dark">
                    new mail
                </div>
                <div class="row border border-dark">
                    inbox
                </div>
                <div class="row border border-dark">
                    sent
                </div>
                <div class="row border border-dark">
                    trash
                </div>
                <div class="row border border-dark">
                    drafts
                </div>
            </div>
        </section>
    `,
    components: {

    },
    data() {
        return {}
    },
    created() { },
    methods: {
        newMail() {
            this.$emit('newMail')
        },
        inbox() {
            this.$emit('newMail')
        },
        newMail() {
            this.$emit('newMail')
        },
    },
    computed: {

    }
}