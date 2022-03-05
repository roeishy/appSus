
export default {
    props: ['userId', 'unread'],
    template: `
        <section class="mail-folders">
            <div class="folder" @click="newMail" >
                    new mail
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/inbox'"><img src="../imgs/inbox.png"> inbox {{unread}}</router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/sent'">
                <img src="../imgs/sent.png">sent
                </router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/trash'"><img src="../imgs/trash.png">trash</router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/drafts'"><img src="../imgs/drafts.png">drafts</router-link>
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