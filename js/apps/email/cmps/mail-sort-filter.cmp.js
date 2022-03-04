export default {
    template: `
        <section class="mail-sort-filter">
            <select v-model="sortBy" id="sort">
                <option value="sentAt">date</option>
                <option value="subject">title</option>
            </select>
</section>
    `,
    data() {
        return {
            sortBy: 'sentAt'
        }
    },
    created() { },
    watch: {
        'sortBy': 'sort'
    },
    methods: {
        sort() {
            console.log('sort1');
            this.$emit('sort', this.sortBy)
        }
    },
    computed: {

    }
}