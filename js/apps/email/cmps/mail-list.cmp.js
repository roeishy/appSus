import mailPreview from "./mail-preview.cmp.js";


export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
           <h1>emails </h1>
           <div class="row text-center ">
                <div class="col border border-dark">
                    from
                </div>
                <div class="col border border-dark">
                    subject
                </div>
                <div class="col border border-dark">
                    body
                </div>
                <div class="col border border-dark">
                    date
                </div>
                <div class="col border border-dark">
                    actions
                </div>
            </div>
           <div v-for="mail in mails" :key="mail.id">
                <mail-preview @read="read" @trash="trash" :mail="mail" />
           </div>
        </section>
    `,
    components: {
        mailPreview
    },
    data() {
        return {

        };
    },
    mounted() {

    },
    created() {

    },
    methods: {
        trash(mail) {
            this.$emit('trash', mail)
        },
        read(mail) {
            this.$emit('read', mail)
        }
    },
    computed: {

    }
};
