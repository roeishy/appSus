export default {
    props: ['body'],
    template: `
        <section class="mail-body">
            <p>{{text}}</p>
            <!-- <button v-if="showBtn" @click="showHide">{{btnText}}</button> -->
        </section>
    `,
    data() {
        return {
            showMore: false,
            showBtn: false
        };
    },
    methods: {
        showHide() {
            this.showMore = !this.showMore;
        }
    },
    computed: {
        text() {
            if (this.body.length <= 20) {
                this.showBtn = false;
                return this.body;
            }
            this.showBtn = true;
            if (this.showMore) {
                var fulltText = this.body
                return fulltText
            }
            var shortText = this.body.slice(0, 20) + '...'

            return shortText
        },
        btnText() {
            if (this.showMore) return 'show less';
            return 'show more'
        }
    }
}