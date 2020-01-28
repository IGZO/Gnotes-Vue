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
      <SideBar></SideBar>
    </div>
    <div class="main-panel">
      <NavBar></NavBar>

      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <div class="card-header">
                        <h4 class="card-title">Modal</h4>
                      </div>

                      <button
                        class="btn btn-rose btn-round"
                        data-toggle="modal"
                        data-target="#myModal10"
                      >
                        Small alert modal
                      </button>

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
                            <div class="modal-footer justify-content-center">
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
                              >
                                Yes
                                <div class="ripple-container"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--    end small modal -->
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
import SideBar from "./SideBar";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default {
  components: {
    SideBar,
    NavBar,
    Footer
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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

<style></style>
