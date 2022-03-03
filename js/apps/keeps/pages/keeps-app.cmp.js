import { keepService } from '../services/keep-service.js';
import keepsList from '../cmp/keeps-list.cmp.js';
import editKeep from '../cmp/edit-keep.cmp.js';



export default {
    template: `
        <section v-if="keeps">
           <h1>keeps </h1>
           <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">🔎</span>
              <input type="text" class="form-control" placeholder="search any keep" aria-label="searchKeep" aria-describedby="basic-addon1">
            </div>
            <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-primary col-6 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Keep</button>
            <edit-keep />
            </div>
            <div class="row">
            <div class="col-lg-3" v-for="keep in keeps" :key="keep.id">
                <keeps-list  :keep="keep" @remove="removeKeep" @removeTodo="removeTodo"/>
            </div>
            </div>
        
           <pre>{{keeps}}</pre>
        </section>
    `,
    components: {
        keepsList,
        editKeep

    },
    data() {
        return {
            id: null,
            user: null,
            keeps: null
        };
    },
    created() {


    },
    mounted() {
        this.getKeepsUser()
    },
    methods: {
        removeKeep(id) {
            keepService.remove(id)
            const idx = this.keeps.findIndex(keep => keep.id === id)
            this.keeps.splice(idx, 1)
        },
        getKeepsUser() {
            this.id = this.$route.params.userId;
            keepService.query(this.id).then(res => {
                this.keeps = res
            })
        },

        removeTodo(keepId, todoId) {
            var myKeep = this.keeps.find(k => k.id === keepId)
            var keepIdx = this.keeps.findIndex(keep => keep.id === keepId)
            var keep = this.keeps[keepIdx]
            const todoIdx = keep.info.txt.findIndex(todo => todo.id === todoId)
            keep.info.txt.splice(todoIdx, 1)
            keepService.save(myKeep)
        },

    },
    computed: {
        allKeeps() {
            return keepService.query()
                .then(keeps => this.keeps = keeps);
        },

    }
};
