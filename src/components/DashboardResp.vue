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
                      <div class="col-md-4 col-sm-4"></div>
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

                              <input type="file" name="..." />
                            </span>
                            <a
                              
                              class="btn btn-success btn-round fileinput-exists"
                              
                              > Envoyer</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
export default {
  components: {
    SideBarRes,
    NavBar,
    Footer
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style></style>
