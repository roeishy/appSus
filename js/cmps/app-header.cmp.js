export default {
    template: `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">AppSus</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link to="/home/:userId"><button class="btn btn-dark btn-outline-warning m-1 text-light">Home</button></router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/about"><button class="btn btn-dark btn-outline-warning m-1 text-light">About</button></router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/mail/"><button class="btn btn-dark btn-outline-warning m-1 text-light">Mails</button></router-link>
                    </li> 
                    <li class="nav-item">
                    <router-link to="/keeps/"><button class="btn btn-dark btn-outline-warning m-1 text-light">Keeps</button></router-link>
                    </li>                                        
                  </ul>  
                  <div class="float-end">                  
                    <router-link to="/" ><button class="btn btn-dark btn-outline-warning m-1 text-light">LogIn</button></router-link>                    
                  </div>                
                </div>
              </div>
            </nav>

        
    
    `
}