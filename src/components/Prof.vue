<template>
  <div class="wrapper ">
    <div
      class="sidebar"
      data-color="rose"
      data-background-color="black"
      data-image="static/assets/img/sidebar-1.jpg"
    >
      <div class="logo">
        <a class="simple-text logo-mini">
          GN
        </a>
        <a class="simple-text logo-normal">
          Gnotes
        </a>
      </div>
      <SideBarRes></SideBarRes>
    </div>
    <div class="main-panel">
      <NavBar></NavBar>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card ">
                <div class="card-header card-header-rose card-header-icon">
                  <h4 class="card-title">Nouveu Professeur</h4>
                </div>
                <div class="card-body ">
                  <form method="#" action="#">
                    <div class="form-group">
                      <label for="text" class="bmd-label-floating">Nom</label>
                      <input v-model="Professeur.first_name" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="text" class="bmd-label-floating"
                        >Prenon</label
                      >
                      <input v-model="Professeur.last_name" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="email" class="bmd-label-floating">Email</label>
                      <input v-model="Professeur.email" type="text" class="form-control" />
                    </div>
<!--
                    <div class="form-group">
                      <label for="text" class="bmd-label-floating"
                        >username</label
                      >
                      <input v-model="Professeur.username" type="text" class="form-control" />
                    </div>

                    -->
                    <div class="form-group">
                      <label for="text" class="bmd-label-floating"
                        >Password</label
                      >
                      <input v-model="Professeur.password" type="text" class="form-control" />
                    </div>
                  </form>
                </div>
                <div class="card-footer ">
                  <button
                    class="btn btn-rose btn-round"
                    data-toggle="modal"
                    data-target="#confirm"
                    
                    
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-rose card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">assignment</i>
                  </div>
                  <h4 class="card-title">Liste des Professeurs</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">ID</th>
                          <th>Email</th>
                          <th>Nom</th>
                          <th>Prenon</th>
                        
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="Professeur in Professeurs">
                          <td class="text-center">{{ Professeur.id }}</td>
                          <td>{{ Professeur.email }}</td>
                          <td>{{ Professeur.first_name }}</td>
                          <td>{{ Professeur.last_name }}</td>
                          <td class="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger btn-link"
                              @click="settingEnvirement(Professeur)"
                              data-toggle="modal"
                              data-target="#delete"
                            >
                              <i class="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade modal-mini modal-primary"
        id="confirm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-small">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                <i class="material-icons">clear</i>
              </button>
            </div>
            <div class="modal-body">
              <p>Voulez vous vraiment continuer ?</p>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-link" data-dismiss="modal">
                Annuler
              </button>
              <button
                type="button"
                @click="postSemester()"
                class="btn btn-success btn-link"
                data-dismiss="modal"
              >
                OK
                <div class="ripple-container"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--    end small modal -->

      <div
        class="modal fade modal-mini modal-primary"
        id="delete"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-small">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                <i class="material-icons">clear</i>
              </button>
            </div>
            <div class="modal-body">
              <p>Voulez vous vraiment continuer ?</p>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-link" data-dismiss="modal">
                Annuler
              </button>
              <button
                type="button"
                @click="delSemester()"
                class="btn btn-success btn-link"
                data-dismiss="modal"
              >
                OK
                <div class="ripple-container"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import SideBarRes from "./SideBarRes";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";

export default {
  components: {
    SideBarRes,
    NavBar,
    Footer
  },
  data() {
    return {
      toDelete: {},
      Professeur: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        emailVerified: true
      },
      Professeurs: [],
    };
  },
  methods: {
    postSemester: function() {
      if (this.Professeur.first_name)
        axios
          .post(this.BaseUrl + "Teachers", this.Professeur)
          .then(response => {
            console.log(response);
            this.Professeurs.push(response.data);
            this.Professeur = {
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              emailVerified: true
            }
          })
          .catch(error => {
            console.log(error);
          });
    },
    settingEnvirement: function(item) {
      this.toDelete = item;
      console.log(this.toDelete);
    },
    delSemester: function() {
      if (this.toDelete.id)
        axios
          .delete(this.BaseUrl + "Teachers/" + this.toDelete.id)
          .then(response => {
            console.log(response);
            var index = this.Professeurs.indexOf(this.toDelete);
            if (index > -1) {
              this.Professeurs.splice(index, 1);
            }
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  beforeMount: function() {
    //this.$session.has("userId") ? console.log("session found") : this.$router.push('/sign');
  },
  beforeCreate: function() {
    //this.$session.start();
  },
  created: function() {
    axios
      .get(this.BaseUrl + "Teachers")
      .then(response => {
        console.log(response);
        this.Professeurs = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    
  }
};
</script>

<style></style>
