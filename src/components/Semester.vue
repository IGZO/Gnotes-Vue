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
                  <h4 class="card-title">Nouveu Semestre</h4>
                </div>
                <div class="card-body ">
                  <form method="#" action="#">
                    <div class="col-md-12 form-group">
                      <label for="Text" class="bmd-label-floating"
                        >Intitulé Semestre</label
                      >
                      <input
                        v-model="Semester.name"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <select
                        v-model="Semester.schoolYearId"
                        class="form-control" 
                      >
                        <option selected> Année Universitaire </option>
                        <option v-for="item in schoolYears" :value="item.id">
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
                  <h4 class="card-title">Liste des Semestres</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">ID</th>
                          <th>Semester</th>
                          <th>Année Universitaire</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="Semester in Semesters">
                          <td class="text-center">{{ Semester.id }}</td>
                          <td>{{ Semester.name }}</td>
                          <td>
                            {{ schoolYears.find(element => element.id == Semester.schoolYearId).name }}
                          </td>

                          <td class="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger btn-link"
                              @click="settingEnvirement(Semester)"
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
              <p>Voulez vous vraiment continuer ? </p>
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
      Semester: {
        name: '',
        schoolYearId: ''
      },
      Semesters: [],
      schoolYears: []
    };
  },
  methods: {
    postSemester: function() {
      if (this.Semester.name)
        axios
          .post(this.BaseUrl + "Semesters", this.Semester)
          .then(response => {
            console.log(response);
            this.Semesters.push(response.data);
            this.Semester.name = ''
            this.Semester.schoolYearId = ''
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
          .delete(this.BaseUrl + "Semesters/" + this.toDelete.id)
          .then(response => {
            console.log(response);
            var index = this.Semesters.indexOf(this.toDelete);
            if (index > -1) {
              this.Semesters.splice(index, 1);
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
      .get(this.BaseUrl + "Semesters")
      .then(response => {
        console.log(response);
        this.Semesters = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(this.BaseUrl + "SchoolYears")
      .then(response => {
        console.log(response);
        this.schoolYears = response.data;
        
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
