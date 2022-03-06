export default {
    props: ['users'],
    template: `
        <section class="home-page app-main d-flex justify-content-center align-items-center">
        <div class="card" style="width: 30%;">
            <h1>sign up</h1>
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
            
          </div>
        </div>  

            <!-- <h3>sign up</h3>
            <form @submit.prevent="signUp">
                <label for="uName">
                    name:
                    <input v-model="user.userName" type="text" id="uName" required>
                </label>
                <label for="pass">
                    rate:
                    <input v-model="user.pass" type="text" id="pass" required>
                </label>
                <button >Send</button>
            </form>
            
        </section> -->
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
        signUp() {
            this.users
                .then(res => {
                    var id = res.findIndex(user => user.userName === this.user.userName)
                    if (id === -1) {
                        console.log('creating user');
                        this.$emit('signUp', this.user);
                        return
                    }
                    console.log('NOT creating user ERROR');
                    return
                })
        }
    },
    computed: {
    },
}