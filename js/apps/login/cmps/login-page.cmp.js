
export default {
    props: ['users'],
    template: `
        

        <section class="login-page d-flex justify-content-center align-items-center">
       
        <div class="card" style="width: 30%;">
            <h1>LogIn Form</h1>
          <img src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg" style="max-width:300px" class="card-img-top rounded mx-auto" alt="...">
          <div class="card-body">            
          <form @submit.prevent="login" autocomplete="off">
                <label for="uName" class="col-12 fs-5">
                    user name:
                    <input class="form-control" placeholder="User Name" v-model="user.userName" type="text" id="uName" required>
                </label>
                <label for="pass" class="col-12 fs-5">
                    password:
                    <input class="form-control" placeholder="Password"  v-model="user.pass" type="password" id="pass" required>
                </label>
                <button class="btn btn-primary col-12 mt-3">Send</button>                
            </form>
            <button @click="signUp" class="btn btn-secondary col-12 mt-3 opacity-50" >Sign Up!</button>
          </div>
        </div>  
        </section>
    `,
    data() {
        return {
            user:
            {
                userName: '',
                pass: '',
            }
        };
    },
    created() {
    },
    methods: {
        login() {
            this.$emit('login', this.user);
        },
        signUp() {
            this.$emit('newUser');
        },
    },
    computed: {
    },
}