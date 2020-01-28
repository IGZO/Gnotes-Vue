<template>
  <div>
    <div class="wrapper wrapper-full-page">
      <div
        class="page-header login-page header-filter"
        filter-color="black"
        style="background-image: url('../../assets/img/login.jpg'); background-size: cover; background-position: top center;"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
              <form class="form" method="" action="">
                <div class="card card-login">
                  <div class="card-header card-header-rose text-center">
                    <h3 class="card-title">ENSAM Casablanca</h3>
                    <h4 class="card-title">Accès Administration</h4>
                  </div>

                  <Alert v-if="showAlert" :msg="Alert.msg" :type="Alert.type" />
                  <Spiner v-if="showSpiner" />

                  <div class="card-body ">
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">face</i>
                          </span>
                        </div>
                        <input
                          v-model="user.email"
                          type="email"
                          class="form-control"
                          placeholder="Email d'utilisateur"
                        />
                      </div>
                    </span>

                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">lock_outline</i>
                          </span>
                        </div>
                        <input
                          v-model="user.password"
                          type="password"
                          class="form-control"
                          placeholder="Password..."
                        />
                      </div>
                    </span>

                    <span class="bmd-form-group">
                      <div class="input-group" style="padding-left: 15px;;margin-top: 20px;">
                        <!-- class = selectpicker -->
                        <select
                          class=""
                          data-size="7"
                          data-style="btn btn-primary btn-round"
                          title="Type de Profil"
                          v-model="type"
                        >
                          <option disabled selected>Type de Profil</option>
                          <option value="Admin">Administration</option>
                          <option value="Resp">Responsable</option>
                          <option value="Prof">Professeur</option>
                        </select>
                      </div>
                    </span>
                  </div>
                  <div class="card-footer justify-content-center">
                    <a @click="login" class="btn btn-rose btn-link btn-lg"
                      >Connexion</a
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from 'axios';
import Alert from "./Alert";
import Spiner from "./Spiner";

export default {
  components: {
    SideBar,
    NavBar,
    Footer,
    Alert,
    Spiner
  },
  data() {
    return {
      user: {
        email: 'string1@test.test',
        password: 'kjkljkhkj'
      },
      type:'',
      showAlert: false,
      showSpiner: false,
      Alert: {
        msg: 'test',
        type: 'alert'
      }
    };
  },
  methods: {
    login: function() {
      switch(this.type){
        case "Admin": this.loginAdmin() ; break;
        case "Resp": this.loginResp() ; break;
        case "Prof": this.loginProf() ; break;
        default: console.log("veuillez sélectionner un type de profil");
          this.Alert = {
            msg: 'veuillez sélectionner un type de profil',
            type: 'alert'
          };
          this.showAlert = true;
         break;
      }
    },
    loginAdmin: function(){
      this.request(this.BaseUrl+"Admins/login")
    },
    loginResp: function(){
      this.request(this.BaseUrl+"Responsables/login")
    },
    loginProf: function(){
      this.request(this.BaseUrl+"Teachers/login")
    },
    request: function(url){
      this.showSpiner = true;
      let self = this
      axios
        .post(url,this.user)
        .then(response => {
          //console.log(response);
          this.$session.start()
          this.$session.set("userId",response.data.userId)
          this.$session.set("userType",self.type)

          this.showSpiner = false;
          switch(self.type){
            case "Admin": self.$router.push('/Admin') ; break;
            case "Resp": self.$router.push('/Resp') ; break;
            case "Prof": self.$router.push('/Prof') ; break;
            default: console.log("This error should never show"); break;
          }
          
        })
        .catch(error => {
          //console.log(error);
          if( error.response.data.error.message == "login failed" ){
            this.Alert = {
              msg: "Informations d'identification erronées, veuillez vérifier vos informations de connexion",
              type: 'alert'
            };
          }else{
            this.Alert = {
              msg: "Le serveur ne répond pas, veuillez contacter l'administration",
              type: 'alert'
            };
          }
          
          this.showAlert = true;
          this.showSpiner = false;
        });
    },
    
  },
  beforeMount() {
    if(typeof this.$session.has("userType") !== "undefined"){
      switch(this.$session.get('userType')){
        case "Admin": this.$router.push('/Admin') ; break;
        case "Resp": this.$router.push('/Resp') ; break;
        case "Prof": this.$router.push('/Prof') ; break;
        default: console.log("default"); break;
      }
    }else{
      console.log("no session found");
    }
  },
  beforeCreate() {
    this.$session.start();
    console.log("executed")
  }
};
</script>

<style scoped>


</style>
