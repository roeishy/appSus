import todosPreview from './todos-preview.cmp.js';
export default {
  props: ['keep'],
  template: `
    <section>
        <div class="card shadow-lg p-3 mb-5 bg-body rounded myKeep" :style="keep.style">
            <h1 v-if="!editStatus">{{keep.info.title}}</h1>
            <input v-if="editStatus" type="text" class="form-control" v-model="title" placeholder="enter title keep..."
                aria-label="title" aria-describedby="basic-addon1">
            <div v-if="!editStatus" class="card-content">
                <img v-if="keep.type==='note-img'" :src="keep.info.txt" class="card-img-top" :alt="keep.info.title">
                <iframe v-if="keep.type==='note-video'" width="100%" height="200" :src="keep.info.txt">
                </iframe>
                <div class="card-body">
                    <p v-if="keep.type==='note-txt'" class="lead">{{keep.info.txt}}</p>
                    <div v-if="keep.type==='note-todos'" class="row mb-2" v-for="todo in keep.info.txt" :key="todo.id">
                        <todos-preview :todo="todo" @removeTodo="removeTodo" />
                    </div>
                    <div class="card-btns mt-4">
                        <button v-if="keep.isPinned" class="btn btn-success keep-helper-btn"
                            @click="changePinned(keep)"><i class="bi bi-pin-angle"></i></button>
                        <button v-if="!keep.isPinned" class="btn btn-light keep-helper-btn ms-2"
                            @click="changePinned(keep)"><i class="bi bi-pin-angle-fill"></i></button>
                        <button @click="editKeep(keep)" class="btn btn-dark keep-helper-btn ms-2"><i
                                class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-danger keep-helper-btn ms-2" @click="remove(keep.id)"><i
                                class="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            </div>
            <div v-if="editStatus" class="">
            <div class="form-floating">
                    <textarea class="form-control" v-model="txt" placeholder="your note..." id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">info txt</label>                  
                  </div>
                  <button class="btn btn-primary" @click="editMyKeep(keep)">Save Changes</button>
            </div>
        </div>
    </section>
     
    `,
  components: {
    todosPreview

  },
  data() {
    return {
      isPinned: false,
      editStatus: false,
      title:null,
      txt:null
    };
  },
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
    removeTodo(id) { 
      this.$emit('removeTodo', this.keep.id, id)
    },
    changePinned() {      
      this.$emit('changePinned', this.keep)
    },
    editKeep(){
      this.editStatus = true
      this.title = this.keep.info.title
      this.txt = this.keep.info.txt
    },
    editMyKeep(keep){
      keep.info.title = this.title
      keep.info.txt = this.txt
      this.$emit('editMyKeep', keep)
      this.title = null
      this.txt = null
      this.editStatus = false
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