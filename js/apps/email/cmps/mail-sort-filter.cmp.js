export default {
    template: `
        <section class="mail-sort-filter">
            <input class="filter" v-model="searchSTR" type="text"  placeholder="search">
            <select class="sort" v-model="sortBy" id="sort">
                <option value="sentAt">date</option>
                <option value="subject">title</option>
            </select>
            
</section>
    `,
    data() {
        return {
            sortBy: 'sentAt',
            searchSTR: '',
        }
    },
    created() { },
    watch: {
        'sortBy': 'sort',
        'searchSTR': 'search'
    },
    methods: {
        sort() {
            this.$emit('sort', this.sortBy)
        },
        search() {
            console.log('search1');
            this.$emit('search', this.searchSTR)
        }
    },
    computed: {

    }
}