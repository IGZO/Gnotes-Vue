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
                      
                        <select
                          class="selectpicker"
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

export default {
  components: {
    SideBar,
    NavBar,
    Footer
  },
  data() {
    return {
      user: {
        email: 'string1@test.test',
        password: 'kjkljkhkj'
      },
      type:''
    };
  },
  methods: {
    
    
  },
  beforeMount() {
    this.$session.clear()
    this.$router.push('/login')
  },
  beforeCreate() {
    this.$session.start();
    console.log("executed")
  }
};
</script>

<style scoped>


</style>
