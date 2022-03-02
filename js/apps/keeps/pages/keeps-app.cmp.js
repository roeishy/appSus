import {keepService} from '../services/keep-service.js'
import noteTxt from '../cmp/note-txt.cmp.js';
import noteImg from '../cmp/note-img.cmp.js';
import noteVideo from '../cmp/note-video.cmp.js';
import noteTodos from '../cmp/note-todos.cmp.js';


export default {
    template: `
        <section >
           <h1>keeps </h1>
           <div class="row" >
        <div class="col">
          <note-txt  :keeps="keeps" />
          </div>
          <div class="col">
              <note-img  :keeps="keeps" />
          </div>
          <div class="col">
          <note-video  :keeps="keeps" />
          </div>
          <div class="col">
          <note-todos  :keeps="keeps" />
          </div>
            
            </div>
           <pre>{{keeps}}</pre>
        </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    data() {
        return {
            id: null,
            user: null,            
            keeps:null
        };
    },
    created() {
        this.id = this.$route.params.userId;
        keepService.query(this.id).then(res=>{
            this.keeps=res
        })
    
    },
    mounted(){
        
    },
    methods: {
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
