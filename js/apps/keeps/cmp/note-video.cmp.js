import keepsAppCmp from "../pages/keeps-app.cmp.js";

export default {
    props:['keeps'],
    template: `
    <section v-for="keep in keeps" :key=keep.id>
        <div v-if="keep.type==='note-video'">
         <div class="card shadow-lg p-3 mb-5 bg-body rounded" :style="keep.style">             
              <h5 class="text-center">{{keep.info.title}}</h5>
              <div class="card-body">
              <iframe width="220" height="315"
                :src="keep.info.url">
                </iframe>
                
              
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