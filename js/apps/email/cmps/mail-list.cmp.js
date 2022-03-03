import mailPreview from "./mail-preview.cmp.js";


export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
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
