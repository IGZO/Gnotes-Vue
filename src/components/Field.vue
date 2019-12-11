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
                  <h4 class="card-title">Nouvelle Filière</h4>
                </div>
                <div class="card-body ">
                  <form method="#" action="#">
                    <div class="col-md-12 form-group">
                      <label for="Text" class="bmd-label-floating"
                        >Intitulé Filière</label
                      >
                      <input
                        v-model="Feild.name"
                        type="text"
                        class="form-control"
                      />
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
                  <h4 class="card-title">Liste des Filière</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">ID</th>
                          <th>Filière</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="Feild in Feilds">
                          <td class="text-center">{{ Feild.id }}</td>
                          <td>{{ Feild.name }}</td>
                          

                          <td class="td-actions text-right">
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger btn-link"
                              @click="settingEnvirement(Feild)"
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
              <p>Are you sure you want to do this?</p>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-link" data-dismiss="modal">
                Never mind
              </button>
              <button type="button" @click="postFeild()" class="btn btn-success btn-link" data-dismiss="modal">
                Yes
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
              <p>Are you sure you want to do this?</p>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-link" data-dismiss="modal">
                Never mind
              </button>
              <button type="button" @click="delFeild()" class="btn btn-success btn-link" data-dismiss="modal">
                Yes
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
      Feild: {
        name: ''
      },
      Feilds: []
    };
  },
  methods: {
    postFeild: function() {
      console.log(this.Feild)
      if (this.Feild.name)
        axios
          .post(this.BaseUrl + "Fields", this.Feild)
          .then(response => {
            console.log(response);
            this.Feilds.push(response.data);
            this.Feild.name = ''
          })
          .catch(error => {
            console.log(error);
          });
      
    },
    settingEnvirement: function(item) {
      this.toDelete = item
      console.log(this.toDelete);
    },
    delFeild: function() {
      if (this.toDelete.id)
        axios
          .delete(this.BaseUrl + "Fields/" + this.toDelete.id)
          .then(response => {
            console.log(response);
            var index = this.Feilds.indexOf(this.toDelete);
            if (index > -1) {
              this.Feilds.splice(index, 1);
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
      .get(this.BaseUrl + "Fields")
      .then(response => {
        console.log(response);
        this.Feilds = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
