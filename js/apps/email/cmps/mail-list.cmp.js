import mailPreview from "./mail-preview.cmp.js";


export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
           <!-- <div class="row text-center border border-dark">
                <div class="col ">
                    from
                </div>
                <div class="col ">
                    subject
                </div>
                <div class="col ">
                    body
                </div>
                <div class="col ">
                    date
                </div>
                <div class="col ">
                    actions
                </div>
            </div> -->
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
