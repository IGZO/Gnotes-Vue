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
                <div class="card-header card-header-rose card-header-text">
                  <div class="card-text">
                    <h4 class="card-title">Importation de fichier Maquette</h4>
                  </div>
                </div>
                <div class="card-body ">
                  <form method="get" action="/" class="form-horizontal">
                    <div class="row">
                    <div class="col-md-12 col-sm-12">
                    <Alert v-if="showAlert" :msg="Alert.msg" :type="Alert.type" />
                    </div>
                      

                    </div>
                    <div class="row">
                      <div class="col-md-3 col-sm-3"></div>
                      <div class="col-md-1 col-sm-1"> <Spiner v-if="showSpiner"/> </div>
                      <div class="col-md-6 col-sm-4">
                        <h4 class="title">Fichier maquette</h4>
                        <div 
                          class="fileinput fileinput-new text-center"
                          data-provides="fileinput"
                        >
                          <div class="fileinput-new thumbnail">
                            <img
                              src="static/assets/img/image_placeholder.jpg"
                              alt="..."
                            />
                          </div>
                          <div
                            class="fileinput-preview fileinput-exists thumbnail"
                          ></div>
                          <div>
                            <span class="btn btn-rose btn-round btn-file">
                              <span class="fileinput-new"
                                >Selectioner maquette</span
                              >
                              <span class="fileinput-exists">Changer</span>

                              <input
                                type="file"
                                id="file"
                                ref="file"
                                v-on:change="handleFileUpload()"
                              />
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#myModal10"
                              class="btn btn-success btn-round fileinput-exists"
                            >
                              Envoyer</a
                            >

                            <div
                              class="modal fade modal-mini modal-primary"
                              id="myModal10"
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
                                    <p>Are you sure you want to do this?</p>
                                  </div>
                                  <div
                                    class="modal-footer justify-content-center"
                                  >
                                    <button
                                      type="button"
                                      class="btn btn-link"
                                      data-dismiss="modal"
                                    >
                                      Never mind
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-success btn-link"
                                      v-on:click="submitFile()"
                                      data-dismiss="modal"
                                    >
                                      Yes
                                      <div class="ripple-container"></div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="card ">
                <div class="card-header card-header-rose card-header-text">
                  <div class="card-text">
                    <h4 class="card-title">Exportation de fichier Maquette</h4>
                  </div>
                </div>

                <div class="card-body ">
                  <div v-for="card in Cards" class="col-md-6">
                    <div class="card card-stats">
                      <div
                        class="card-header card-header-info card-header-icon"
                      >
                        <div class="card-icon">
                          <i class="material-icons">document</i>
                        </div>

                        <p class="card-category">{{ card.name }}</p>
                        <h3 class="card-title">MBDIO</h3>
                      </div>

                      <div class="card-footer">
                        <div class="stats">
                          <a >
                            <i class="material-icons">link</i>
                            <a href=""
                              @click="setUrl(card.name)"
                            >
                              Telecharger
                            </a>
                            le document
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import Alert from "./Alert";
import Spiner from "./Spiner";

export default {
  components: {
    SideBarRes,
    NavBar,
    Footer,
    Alert,
    Spiner
  },
  data() {
    return {
      file: "",
      Cards: [],
      showAlert: false,
      showSpiner: false,
      Alert: {
        msg: 'test',
        type: 'alert'
      }
    };
  },
  beforeMount() {
    console.log();
    if (!(this.$session.has("userType") === false)) {
      switch (this.$session.get("userType")) {
        case "Admin":
          this.$router.push("/");
          break;
        case "Prof":
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
      .get(this.BaseUrl + "Excels")
      .then(response => {
        console.log(response.data);
        this.Cards = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    setUrl(fileName){
      this.$router.push("https://gnotes-api-app.herokuapp.com/api/Documents/excels/download/"+fileName)
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      this.showSpiner = true;
      let self = this;
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post(this.BaseUrl + "Documents/excels/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response);
          self.showSpiner = false;
          
          self.Alert = {
            msg: "le fichier a été téléchargé avec succès, nom du fichier dans le serveur : ",
            type: 'sucess'
          };
          self.showAlert = true;
        })
        .catch(function() {
          console.log("FAILURE!!");
          self.showSpiner = false;
          self.Alert = {
            msg: "Le serveur n'a pas pu transmettre le fichier, veuillez contacter l'administration ou réessayer",
            type: 'alert'
          };
          self.showAlert = true;
        });
    }
  }
};
</script>

<style></style>
