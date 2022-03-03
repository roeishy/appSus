
export default {
    props: ['userId'],
    template: `
        <section class="mail-preview">
            <div class="col text-center">
                <div @click="newMail" class="row ">
                    new mail
                </div>
                <div class="row ">
                    <router-link :to="'/mail/'+userId+'/inbox'">inbox</router-link>
                </div>
                <div class="row ">
                    <router-link :to="'/mail/'+userId+'/sent'">
                        <button class="">sent</button>
                    </router-link>
                </div>
                <div class="row ">
                    <router-link :to="'/mail/'+userId+'/trash'">trash</router-link>
                </div>
                <div class="row ">
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