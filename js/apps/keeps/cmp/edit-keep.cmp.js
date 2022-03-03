import { keepService } from '../services/keep-service.js';
export default {
  props: [''],
  template: `
    
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              
              <h5 class="modal-title" id="exampleModalLabel">add new keep</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" class="form-control" v-model="title" placeholder="enter title keep..." aria-label="title" aria-describedby="basic-addon1">
                    <div class="col-12">
                    <button class="btn btn-warning mt-4" @click=addTodoList>{{buttonText}}</button>
                    </div>
                    <div v-if="addTodo" class="col-12">
                      <h3>make todo</h3>
                      <input type="text" v-for="inp in todosCount" class="form-control col-9" v-model="title" placeholder="Enter some ToDo!"><button @click="addMoreTodo" class="mt-1 btn btn-success col-2">+</button>
                    </div>
                  </div>
                  <hr>
                  <div v-if="!addTodo">
                  <ul>
                        <li>You can write something to create note-text</li>
                        <li>You can paste url from youtube to create note-video</li>
                        <li>You can paste img url from any were to create note-img</li>
                        <li>You can write sentences that start with two stars (**) to create note-todo</li>
                      </ul>

                  <div class="form-floating">
                    <textarea class="form-control" v-model="txt" placeholder="your note..." id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">
                      
                    </label>
                  </div>
                  </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary"  @click="addNewKeep">Save changes</button>              
            </div>
          </div>
        </div>
        
      </div>
      
     
    `,
  components: {


  },
  data() {
    return {
      title: null,
      txt: null,
      type: null,
      userId: this.$route.params.userId,
      addTodo: false,
      buttonText: 'Add todo List',
      todosCount: 1


    };
  },
  methods: {
    addNewKeep() {
      if (!this.title && !this.txt) return
      const checkIfTube = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g
      const takeOnlyId = /(?<=watch\?v=)(.*)(?=&?)/g
      const checkIfImg = /^((?:https?:)\/\/)((?:www|m)\.)?/g
      // let txtArr = this.txt.split('')
      // const checkIfTodo = (txtArr.includes('*'))
      if (this.txt.match(checkIfTube)) {
        const myUrl = this.txt.match(takeOnlyId)
        this.txt = 'https://www.youtube.com/embed/' + myUrl
        this.type = 'note-video'
      } else if (this.txt.match(checkIfImg)) {
        this.type = 'note-img'
        console.log('txt-img', this.txt);
      } else {
        this.type = 'note-txt'
        console.log('txt-txt', this.txt);
      }


      const myKeep = keepService.createKeep(
        this.userId,
        this.type,
        false,
        {
          title: this.title,
          txt: this.txt
        },
        new Date(),
        new Date(),
        {}
      )
      console.log('myKeep', myKeep);
      keepService.save(myKeep)

    },

    addTodoList() {
      this.addTodo ? this.addTodo = false : this.addTodo = true

      this.addTodo ? this.buttonText = 'Add another keep' : this.buttonText = 'Add todo list'
    },

    addMoreTodo(){
      this.todosCount++
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