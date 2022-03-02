
export default {
    props: ['userId'],
    template: `
        <section class="mail-preview">
            <div class="col text-center">
                <div @click="newMail" class="row border border-dark">
                    new mail
                </div>
                <div class="row border border-dark">
                    <router-link :to="'/mail/'+userId+'/inbox'">inbox</router-link>
                </div>
                <div class="row border border-dark">
                    <router-link :to="'/mail/'+userId+'/sent'">sent</router-link>
                </div>
                <div class="row border border-dark">
                    <router-link :to="'/mail/'+userId+'/trash'">trash</router-link>
                </div>
                <div class="row border border-dark">
                    <router-link :to="'/mail/'+userId+'/drafts'">drafts</router-link>
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
        }
    },
    computed: {

    }
}