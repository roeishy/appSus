import mailPreview from "./mail-preview.cmp.js";

export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
           <h1>emails </h1>
           <div class="row">
                <div>
                    from
                </div>
                <div>
                    subject
                </div>
                <div>
                    body
                </div>
                <div>
                    date
                </div>
            </div>
           <div v-for="mail in mails" :key="mail.id">
                <mail-preview :mail="mail" />
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
    },
    computed: {

    }
};
