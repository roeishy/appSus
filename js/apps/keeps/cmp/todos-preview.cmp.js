export default {
    props: ['todo'],
    template: `        
            <button @click="remove(todo.id)"  class=" btn btn-secondary col-2"> ✖ </button>            
            <p class="lead col-7" :style="doneClass" @click="isDone(todo)">{{todo.todoTxt}}</p>   
    `,
    components: {

    },
    data() {
        return {
            doneClass: '',
        };
    },
    methods: {
        remove() {
            this.$emit('removeTodo', this.todo.id)
        },
        isDone(todo) {
            todo.isDone ? this.doneClass = 'text-decoration-line: line-through;' : this.doneClass = ''
        }
    },
    computed: {
        
    },
    created() {


    },
    ummounted() {

    },
    mounted() {

    }

};