import { keepService } from '../services/keep-service.js'
import keepsList from '../cmp/keeps-list.cmp.js';



export default {
    template: `
        <section >
           <h1>keeps </h1>
           <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">🔎</span>
              <input type="text" class="form-control" placeholder="search any keep" aria-label="searchKeep" aria-describedby="basic-addon1">
            </div>
            <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-primary col-6 mb-5">Add New Keep</button>
            </div>
            <div class="row">
            <div class="col-lg-3" v-for="keep in keeps" :key="keep.id">
                <keeps-list  :keep="keep" @removeTodo="removeTodo" @remove="removeKeep"/>
            </div>
            </div>
           <!-- <div class="row" >
        <div class="col">
          <note-txt  :keeps="keeps" @remove="removeKeep"/>
          </div>
          <div class="col">
              <note-img  :keeps="keeps" @remove="removeKeep"/>
          </div>
          <div class="col">
          <note-video  :keeps="keeps" @remove="removeKeep"/>
          </div>
          <div class="col">
          <note-todos  :keeps="keeps" @remove="removeKeep"/>
          </div>
            
            </div> -->
           <pre>{{keeps}}</pre>
        </section>
    `,
    components: {
        keepsList

    },
    data() {
        return {
            id: null,
            user: null,
            keeps: null
        };
    },
    created() {
        this.id = this.$route.params.userId;
        keepService.query(this.id).then(res => {
            this.keeps = res
        })

    },
    mounted() {

    },
    methods: {
        removeKeep(id) {//TODO
            console.log('id to remove: ', id);

            const idx = this.keeps.findIndex(keep => keep.id === id)
            console.log('this keep deleted: ', idx);
            this.keeps.splice(idx, 1)
            console.log('keeps arr after delete: ', this.keeps);
        },
        removeTodo(todoId, keepId) {
            var keepIdx = this.keeps.findIndex(keep => keep.id === keepId)
            var keep = this.keeps[keepIdx]
            const todoIdx = keep.info.txt.findIndex(todo => todo.id === todoId)
            keep.info.txt.splice(todoIdx, 1)
            //TODO update local storage
        }
    },
    computed: {
        allKeeps() {
            return keepService.query()
                .then(keeps => this.keeps = keeps);
        },
        // logedUser() {
        //     return userService.getLogedUser(this.id)
        //         .then(user => {
        //             return user
        //         })
        // },
    }
};
