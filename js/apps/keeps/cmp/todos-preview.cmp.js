export default {
    props: ['todo'],
    template: `        
            <button @click="remove(todo.id)"  class=" btn btn-secondary col-2"> <i class="bi bi-x-lg"></i> </button>            
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
        isDone() {
            this.$emit('isDone', this.todo.id)
            if(this.todo.isDone){
                this.doneClass= 'text-decoration: line-through'
            }else{
                this.doneClass=''
            }
        }
    },
    computed: {
        todoIsDone(){
            if(this.todo.isDone){
                this.doneClass= 'text-decoration: line-through'
            }else{
                this.doneClass=''
            }
            return this.doneClass
        }
    },
    created() {


    },
    ummounted() {

    },
    mounted() {

    }

};