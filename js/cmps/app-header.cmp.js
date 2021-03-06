import { userService } from '../apps/login/services/userService.js'
export default {
    template: `
            <nav v-if="user" class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">AppSus</a>
                <button @click="navToggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" :aria-expanded="navbarToggler" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link :to="'/home/'+user.id"><button class="btn btn-dark btn-outline-warning m-1 text-light">Home</button></router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/about"><button class="btn btn-dark btn-outline-warning m-1 text-light">About</button></router-link>
                    </li>
                    <li class="nav-item">
                    <router-link :to="'/mail/'+user.id+'/inbox'"><button class="btn btn-dark btn-outline-warning m-1 text-light">Mails</button></router-link>
                    </li> 
                    <li class="nav-item">
                    <router-link :to="'/keeps/'+user.id"><button class="btn btn-dark btn-outline-warning m-1 text-light">Keeps</button></router-link>
                    </li>                                        
                  </ul>  
                  <div class="float-end">                  
                    <router-link to="/" ><button class="btn btn-dark btn-outline-warning m-1 text-light">LogIn</button></router-link>                    
                  </div>                
                </div>
              </div>
            </nav>
            <!-- <pre>{{user}}</pre> -->
        
    
    `,
    data(){
        return{
            id: null,
            user: null,
            users: null,
            navbarToggler:false
            
        }
    },
    created() {
        this.id = this.$route.params.userId;
        userService.getLogedUser(this.id)
            .then(user => {
                this.user = user
            })
    },
    methods: {
        navToggler(){
            this.navbarToggler=!this.navbarToggler
            console.log('navbarToggler',this.navbarToggler);

        }
    },
    computed: {
        allUsers() {
            return userService.query()
                .then(users => this.users = users);
        }        
        
    }
}