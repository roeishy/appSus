import { keepService } from '../services/keep-service.js';
import keepsList from '../cmp/keeps-list.cmp.js';
import editKeep from '../cmp/edit-keep.cmp.js';



export default {
    template: `
        <section v-if="keeps">                     
           <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">🔎</span>
              <input @input="filterKeeps" v-model="filterBy" type="text" class="form-control" placeholder="search any keep" aria-label="searchKeep" aria-describedby="basic-addon1">
            </div>
            <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-primary col-6 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Keep</button>
            <edit-keep @addKeep="addMyKeep"/>
            </div>
            <div class="row">
            <div class="col-lg-3" v-for="keep in keeps" :key="keep.id">
                <keeps-list  :keep="keep" @remove="removeKeep" @removeTodo="removeTodo" @isTodoDone="isTodoDone" @changePinned="changePinned" @editMyKeep="editMyKeep" @changeIndex="changeIndex"/>
            </div>
            </div>
        
           <!-- <pre>{{keeps}}</pre> -->
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
            keeps: null,
            pinStatus: null,
            filterBy:null
            
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
        changeIndex(kId, newIndex) {
            // keepService.remove(id)
            // const idx = this.keeps.findIndex(keep => keep.id === id)
            // this.keeps.splice(idx, 1)
        },
        getKeepsUser() {
            this.id = this.$route.params.userId;
            keepService.query(this.id).then(res => {
                this.keeps = res
            })
        },
        isTodoDone(keepId, todoId){
            var myKeep = this.keeps.find(k => k.id === keepId)
            var keepIdx = this.keeps.findIndex(keep => keep.id === keepId)
            var keep = this.keeps[keepIdx]
            const todoIdx = keep.info.txt.findIndex(todo => todo.id === todoId)
            // console.log('keep.info.txt[todoIdx].isDone', keep.info.txt[todoIdx].isDone);
            keep.info.txt[todoIdx].isDone? keep.info.txt[todoIdx].isDone = false : keep.info.txt[todoIdx].isDone = true
            keepService.save(myKeep)
        },

        removeTodo(keepId, todoId) {
            var myKeep = this.keeps.find(k => k.id === keepId)
            var keepIdx = this.keeps.findIndex(keep => keep.id === keepId)
            var keep = this.keeps[keepIdx]
            const todoIdx = keep.info.txt.findIndex(todo => todo.id === todoId)
            keep.info.txt.splice(todoIdx, 1)
            keepService.save(myKeep)
        },
        addMyKeep(userId, type, pinned, info, createAt, updateAt, style) {
            var newKeep = keepService.createKeep(userId, type, pinned, info, createAt, updateAt, style)
            this.keeps.push(newKeep)
        },
        changePinned(keep) {
            console.log('keep', keep.isPinned);
            if (keep.isPinned) {
                keep.isPinned = false
            } else {
                keep.isPinned = true

            }

            console.log('master keep ', keep);
            keepService.save(keep)

            if (keep.isPinned) this.changePlace(keep)
        },
        changePlace(keep) {
            const idx = this.keeps.findIndex(myKeep => myKeep.id === keep.id)
            this.keeps.splice(idx, 1)
            this.keeps.unshift(keep)

        },
        editMyKeep(keep){
            keepService.save(keep)
        },
        filterKeeps(){            
            
        }
        

    },
    computed: {
        allKeeps() {
            return keepService.query()
                .then(keeps => this.keeps = keeps);
        },

    }
};
