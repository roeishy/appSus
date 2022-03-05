
export default {
    props: ['userId', 'unread'],
    template: `
        <section class="mail-folders">
            <div class="folder" @click="newMail" >
                    new mail
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/inbox'">inbox {{unread}}</router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/sent'">
                        sent
                </router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/trash'">trash</router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/drafts'">drafts</router-link>
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