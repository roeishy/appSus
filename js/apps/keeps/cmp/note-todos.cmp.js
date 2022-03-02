export default {
    props:['keeps'],
    template: `
    <section v-for="keep in keeps" :key=keep.id>
        <div v-if="keep.type==='note-todos'" > 
         <div class="card shadow-lg p-3 mb-5 bg-body rounded" :style="keep.style">             
              <h5 >{{keep.info.label}}</h5>
              <div class="card-body">
              <ul style="list-style-type: square; cursor: pointer">
                  <li v-for="todo in keep.info.todos" >{{todo.txt}} {{todo.doneAt}}</li>
              </ul>
                <h5 class="card-title">TYPE: {{keep.type}}</h5>
                <a href="#" v-if="keep.isPinned" class="btn btn-warning">📌</a>
                <a href="#" class="btn btn-danger">🗑</a>
              </div>
              </div>
            </div>
            </section>
    `,
    components:{

    },
    data() {
        return { 
            
        };
    },
    methods: {
        
    },
    computed: {       
        
    },
    created() {
        
    },
    ummounted(){
        
    },
    mounted(){
        
    }

};