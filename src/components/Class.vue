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
                  <h4 class="card-title">Nouvelle Matière</h4>
                </div>
                <div class="card-body ">
                  <form method="#" action="#">
                    <div class="col-md-12 form-group">
                      <label for="Text" class="bmd-label-floating"
                        >Intitulé Matière</label
                      >
                      <input
                        v-model="Subject.name"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <label for="Text" class="bmd-label-floating"
                        >Coefficient Matière</label
                      >
                      <input
                        v-model="Subject.coeff"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <select
                        v-model="Subject.moduleId"
                        class="form-control" 
                      >
                        <option selected> Modules </option>
                        <option v-for="item in Modules" :value="item.id">
                          {{ item.name }}
                        </option>
                      </select>
                      <br />
                    </div>
                    

                    <div class="col-md-6 form-group">
                      <select
                      v-model="Subject.teacherId"
                        
                        class="form-control" 
                      >
                        <option selected> Professeur </option>
                        <option v-for="item in Modules" :value="item.id">
                          {{ item.name }}
                        </option>
                      </select>
                      <br />
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
                  <h4 class="card-title">Liste des Matières</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">ID</th>
                          <th>Nom Matière</th>
                          <th>Coeff Matière</th>
                          <th>professeur</th>
                          <th>Module</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="Subject in Subjects">
                          <td class="text-center">{{ Subject.id }}</td>
                          <td>{{ Subject.name }}</td>
                          <td>{{ Subject.coeff }}</td>
                          
                          <td >
                          
                            <!--
                            {{ Teachers.find(element => element.id == Subject.teacherId).username }}
                            -->
                          </td>
                          <td>
                             
                            {{ Modules.find(element => element.id == Subject.moduleId).name }}
                            
                          </td>

                          <td class="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger btn-link"
                              @click="settingEnvirement(Subject)"
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
              <button type="button" @click="postSemester()" class="btn btn-success btn-link" data-dismiss="modal">
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
              <button type="button" @click="delSemester()" class="btn btn-success btn-link" data-dismiss="modal">
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
      Subject: {
        name: "",
        coeff: '',
        teacherId: "",
        moduleId: ""
      },
      Modules: [],
      Teachers: [],
      Subjects: []
    };
  },
  methods: {
    test: function(){

      console.log("here "+this.Modules.find(element => element.id == '5ddd72de384a0900043c3b15').name   )
    },
    postSemester: function() {
      if (this.Subject.name)
        axios
          .post(this.BaseUrl + "Subjects", this.Subject)
          .then(response => {
            console.log(response);
            this.Subjects.push(response.data);
            this.Subject.name = {
              name: "",
              coeff: '',
              teacherId: "",
              moduleId: ""
            }
          })
          .catch(error => {
            console.log(error);
          });
      


    },
    settingEnvirement: function(item) {
      this.toDelete = item
      console.log(this.toDelete);
    },
    delSemester: function() {
      if (this.toDelete.id)
        axios
          .delete(this.BaseUrl + "Subjects/" + this.toDelete.id)
          .then(response => {
            console.log(response);
            var index = this.Subjects.indexOf(this.toDelete);
            if (index > -1) {
              this.Subjects.splice(index, 1);
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
      .get(this.BaseUrl + 'Modules')
      .then(response => {
        console.log(response);
        this.Modules = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(this.BaseUrl + "Subjects")
      .then(response => {
        console.log(response);
        this.Subjects = response.data;
        
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(this.BaseUrl + "Teachers")
      .then(response => {
        
        this.Teachers = response.data;
        console.log(this.feilds);
      })
      .catch(error => {
        console.log(error);
      }); 
  }
};
</script>

<style></style>
