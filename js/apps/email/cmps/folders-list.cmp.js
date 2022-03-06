
export default {
    props: ['userId', 'unread'],
    template: `
        <section class="mail-folders">
            <div class="folder" @click="newMail" >
                    new mail
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/inbox'"><img src="https://www.gstatic.com/images/icons/material/system/2x/inbox_black_20dp.png"> inbox {{unread}}</router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/sent'">
                <img src="https://www.gstatic.com/images/icons/material/system/2x/send_black_20dp.png">sent
                </router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/trash'"><img src="https://www.gstatic.com/images/icons/material/system/2x/delete_black_20dp.png">trash</router-link>
            </div>
            <div >
                <router-link class="folder" :to="'/mail/'+userId+'/drafts'"><img src="https://www.gstatic.com/images/icons/material/system/2x/insert_drive_file_black_20dp.png">drafts</router-link>
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