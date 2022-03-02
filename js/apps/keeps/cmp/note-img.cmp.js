export default {
    props:['keeps'],
    template: `
    <section v-for="keep in keeps" :key=keep.id >
        <div v-if="keep.type==='note-img'">
         <div class="card shadow-lg p-3 mb-5 bg-body rounded" :style="keep.style">             
              <img v-if="keep.info.url" :src="keep.info.url" class="card-img-top" alt="...">
              <h5>{{keep.info.title}}</h5>
              <div class="card-body">
                <h5 class="card-title">TYPE: {{keep.type}}</h5>
                <a href="#" class="btn btn-warning">📌</a>
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