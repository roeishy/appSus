import todosPreview from './todos-preview.cmp.js';
export default {
  props: ['keep'],
  template: `
    <section>        
         <div class="card shadow-lg p-3 mb-5 bg-body rounded myKeep" :style="keep.style"> 
              <h1>{{keep.info.title}}</h1>
               <img v-if="keep.type==='note-img'" :src="keep.info.txt" class="card-img-top" :alt="keep.info.title">
               <iframe  v-if="keep.type==='note-video'" width="100%" height="200"
                     :src="keep.info.txt">
               </iframe>
              <div class="card-body">
                <p v-if="keep.type==='note-txt'" class="lead">{{keep.info.txt}}</p>
                <div v-if="keep.type==='note-todos'" class="row mb-2"  v-for="todo in keep.info.txt" :key="todo.id">
                  <todos-preview :todo="todo" @removeTodo="removeTodo"/>
                </div>
                <button v-if="keep.isPinned" class="btn btn-success keep-helper-btn" @click="makePinned(keep.isPinned)"><i class="bi bi-pin-angle"></i></button>
                <button v-if="!keep.isPinned" class="btn btn-light keep-helper-btn ms-2" @click="makePinned(keep.isPinned)"><i class="bi bi-pin-angle-fill"></i></button>
                <button class="btn btn-dark keep-helper-btn ms-2"><i class="bi bi-pencil-fill"></i></button>
                <button class="btn btn-danger keep-helper-btn ms-2" @click="remove(keep.id)"><i class="bi bi-trash-fill"></i></button>
              </div>
        </div>            
      </section>
     
    `,
  components: {
    todosPreview

  },
  data() {
    return {
      isPinned: false
    };
  },
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
    removeTodo(id) { 
      this.$emit('removeTodo', this.keep.id, id)
    },
    makePinned(pin) {
      pin != pin
      pin ? this.isPinned = true : this.isPinned = false
    }
    
  },
  computed: {

  },
  created() {

  },
  ummounted() {

  },
  mounted() {

  },
};