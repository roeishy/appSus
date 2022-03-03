import todosPreview from './todos-preview.cmp.js';
export default {
  props: ['keep'],
  template: `
    <section>        
         <div class="card shadow-lg p-3 mb-5 bg-body rounded" :style="keep.style"> 
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
                <button v-if="isPinned" class="btn btn-danger" @click="makePinned(keep.isPinned)">📌</button>
                <button class="btn btn-danger" @click="remove(keep.id)">🗑</button>
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
    removeTodo(id) { //TODO
      console.log(id);
      this.$emit('removeTodo', id, this.keep.id)
    },
    methods: {
      remove(id) {
        this.$emit('remove', id)
      },
      removeTodo(id) { //TODO
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