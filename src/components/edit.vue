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
                          <th v-for="(elem, key) in Students[0].notes">
                            Note {{ key + 1 }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in Students">
                          <td class="text-center">{{ item.code }}</td>
                          <td>{{ item.nom }}</td>
                          <td>{{ item.prenom }}</td>
                          <td>{{ new Date(item.date).toDateString() }}</td>
                          <td v-for="elem in item.notes">
                            {{ elem.score }}
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger btn-link"
                              data-toggle="modal"
                              data-target="#edit"
                              @click="
                                studentID = item.id;
                                oldValue = elem.score;
                                setEnvirenment(elem.id);
                              "
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
                  <label for="Text" class="bmd-label-floating">Note</label>
                  <input v-model="Note" type="text" class="form-control" />
                </div>
                <!--
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
-->
              </form>
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
      Students: [],
      Scores: [],
      Note: "",
      ToUpdate: ""
      //oldValue: '',
      //studentID: ''
    };
  },
  methods: {
    setEnvirenment: function(value) {
      this.ToUpdate = value;
    },
    postSemester: function() {
      if (!isNaN(this.Note)) {
        if (this.Note >= 0 && this.Note <= 20) {
          axios
            .patch(this.BaseUrl + "Scores/" + this.ToUpdate, {
              score: this.Note
            })
            .then(response => {
              var index;
              this.Students.some(function(obj, idx) {
                if (obj.id === response.data.studentId) {
                  index = idx;
                  return true;
                }
              });
              var index1;
              this.Students[index].notes.some(function(obj, idx) {
                if (obj.id === response.data.id) {
                  index1 = idx;
                  return true;
                }
              });
              this.Students[index].notes[index1].score = response.data.score;
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          alert("not a valid Score");
        }
      } else {
        alert("not a valid number");
      }
    }
  },
  beforeMount() {
    if (typeof this.$session.has("userType") !== "undefined") {
      switch (this.$session.get("userType")) {
        case "Admin":
          this.$router.push("/");
          break;
        case "Resp":
          this.$router.push("/");
          break;
        default:
          console.log("default");
          break;
      }
    } else {
      this.$router.push("/login");
    }
  },
  beforeCreate() {
    this.$session.start();
    console.log("executed");
  },
  created: function() {
    axios
      .get(
        this.BaseUrl +
          'Scores?filter={"where":{"subjectId":"' +
          this.$session.get("subjectId") +
          '"}}'
      )
      .then(response => {
        this.Scores = response.data;
        //console.log(this.Scores);

        //groupBY function
        var groupBy = function(xs, key) {
          return xs.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
          }, {});
        };
        //group scores by studentId
        let Grouped = groupBy(response.data, "studentId");

        //console.log(Object.keys(Grouped));

        Object.keys(Grouped).forEach(element => {
          axios
            .get(
              this.BaseUrl +
                'Students?filter={"where":{"id":"' +
                element +
                '"}}'
            )
            .then(response => {
              //this.Teachers = response.data;
              console.log(response.data[0]);

              let Student = {
                id: response.data[0].id,
                nom: response.data[0].last_name,
                prenom: response.data[0].first_name,
                code: response.data[0].code_apogee,
                date: response.data[0].birth_date,
                notes: Grouped[response.data[0].id]
              };
              console.log(Student);
              this.Students.push(Student);
            })
            .catch(error => {
              console.log(error);
            });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
