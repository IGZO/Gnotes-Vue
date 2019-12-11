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
      <SideBarProf></SideBarProf>
    </div>
    <div class="main-panel">
      <NavBar></NavBar>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-rose card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">assignment</i>
                  </div>
                  <h4 class="card-title">Liste des Etudiant</h4>
                  <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        value=""
                        class="form-control"
                        placeholder="Recherche..."
                      />
                    </div>

                    <div class="col-md-3">
                      <button
                        type="submit"
                        class="btn btn-white btn-round btn-just-icon"
                      >
                        <i class="material-icons">search</i>
                        <div class="ripple-container"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">Code Apogée</th>
                          <th>Nom</th>
                          <th>Prenom</th>
                          <th>date de naissance</th>
                          <th>note1</th>
                          <th>note2</th>
                          <th>note3</th>
                          <th>note4</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in Students">
                          <td class="text-center">{{ item.code }}</td>
                          <td>{{ item.nom }}</td>
                          <td>{{ item.prenom }}</td>
                          <td>{{ item.date }}</td>
                          <td>{{ item.note1 }}</td>
                          <td>{{ item.note2 }}</td>
                          <td>{{ item.note3 }}</td>
                          <td>{{ item.note4 }}</td>

                          <td class="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger btn-link"
                              data-toggle="modal"
                              data-target="#edit"
                            >
                              <i class="material-icons">edit</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card-footer ">
                  <button
                    class="btn btn-success btn-round"
                    data-toggle="modal"
                    data-target="#confirm"
                  >
                    Valider
                  </button>
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
        id="edit"
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
              <form method="#" action="#">
                <div class="col-md-12 form-group">
                  <label for="Text" class="bmd-label-floating">1ere Note</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-12 form-group">
                  <label for="Text" class="bmd-label-floating">2eme Note</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-12 form-group">
                  <label for="Text" class="bmd-label-floating">3eme Note</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-12 form-group">
                  <label for="Text" class="bmd-label-floating">4eme Note</label>
                  <input type="text" class="form-control" />
                </div>
              </form>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-link" data-dismiss="modal">
                Annuler
              </button>
              <button
                type="button"
                
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
import SideBarProf from "./SideBarProf";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";

export default {
  components: {
    SideBarProf,
    NavBar,
    Footer
  },
  data() {
    return {
      toDelete: {},
      Feild: {
        name: ""
      },
      Students: [
        {
          nom: "JAIZE",
          prenom: "ABDELLAH",
          code: "45632",
          date: "20/12/1994",
          note1: "",
          note2: "",
          note4: "",
          note3: ""
        },
        {
          nom: "FAKHAM",
          prenom: "MOHAMMED",
          code: "67890",
          date: "20/12/1994",
          note1: "",
          note2: "",
          note4: "",
          note3: ""
        }
      ]
    };
  },
  methods: {},
  beforeMount: function() {
    //this.$session.has("userId") ? console.log("session found") : this.$router.push('/sign');
  },
  beforeCreate: function() {
    //this.$session.start();
  },
  created: function() {}
};
</script>

<style></style>
