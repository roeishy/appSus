export default {
    props: ['todo'],
    template: `        
            <button @click="remove"  class=" btn btn-secondary col-2"> ✖ </button>            
            <p class="lead col-7" :style="doneClass" @click="isDone(todo)">{{todo.todoTxt}}</p>        
        
        <!-- <div class="col-2">
            <p class="lead">{{todo.isDone}}</p>
        </div> -->
        <!-- <pre>{{todo}}</pre> -->
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
        // formatDate(){
        //     const myDate = this.todo.doneAt
        //     return `${myDate.getFullYear()}/${myDate.getMonth()+1}/${myDate.getDay()}`
        // }
    },
    created() {


    },
    ummounted() {

    },
    mounted() {

    }

};