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
        <div class="content">
          <div class="container-fluid">
            <div class="row">

              <div v-for="card in Cards" class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons">store</i>
                    </div>
                    <p class="card-category">L'approche Orienté Objet</p>
                    <h3 class="card-title">MBDIO</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <a @click="setSession(card.subjectId)"> <i class="material-icons">link</i> ouvrir le lien </a>
                    </div>
                  </div>
                </div>
              </div>
                <!--
                      <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-header card-header-rose card-header-icon">
                              <div class="card-icon">
                                <i class="material-icons">equalizer</i>
                              </div>
                              <p class="card-category">Communication Professionelle</p>
                              <h3 class="card-title">MBDIO</h3>
                            </div>
                            <div class="card-footer">
                              <div class="stats">
                                <a href="/editnotes">
                                  <i class="material-icons">link</i> ouvrir le lien
                                </a>
                              </div>
                            </div>
                        </div>
                      </div>

                  -->
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
      Cards: [
        //{ module: "jhkjhjkh", filiere: "khjkkkl", submited: "false",  fileName: "5bff74ae9c8840.xls", subjectId: "jhgdhqsqjd"}
        
      ]
    };
  },
  methods: {
    setSession: function(subjectId){
      this.$session.set("subjectId",subjectId);
      this.$router.push("/editnotes");
    }
  },
  beforeMount() {
    if (!(this.$session.has("userType") === false)) {
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
      .get(this.BaseUrl + 'Excels?filter={"where":{"teacherId":"'+this.$session.get("userId")+'"}}')
      .then(response => {
        console.log(response);
        this.Cards = response.data;
      })
      .catch(error => {
        console.log(error);
      });

  }
};
</script>

<style></style>
