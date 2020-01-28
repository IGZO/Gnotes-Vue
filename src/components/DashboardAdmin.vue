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
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <div class="card card-chart">
                  <div
                    class="card-header card-header-rose"
                    data-header-animation="true"
                  >
                    <div class="ct-chart" id="websiteViewsChart"></div>
                  </div>
                  <div class="card-body">
                    <div class="card-actions">
                      <button
                        type="button"
                        class="btn btn-danger btn-link fix-broken-card"
                      >
                        <i class="material-icons">build</i> Fix Header!
                      </button>
                      <button
                        type="button"
                        class="btn btn-info btn-link"
                        rel="tooltip"
                        data-placement="bottom"
                        title="Refresh"
                      >
                        <i class="material-icons">refresh</i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default btn-link"
                        rel="tooltip"
                        data-placement="bottom"
                        title="Change Date"
                      >
                        <i class="material-icons">edit</i>
                      </button>
                    </div>
                    <h4 class="card-title">Notes Envoyées</h4>
                    <p class="card-category">Répartition sur l'année universitaire 2019</p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">update</i> Just Updated
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-chart">
                  <div
                    class="card-header card-header-success"
                    data-header-animation="true"
                  >
                    <div class="ct-chart" id="dailySalesChart"></div>
                  </div>
                  <div class="card-body">
                    <div class="card-actions">
                      <button
                        type="button"
                        class="btn btn-danger btn-link fix-broken-card"
                      >
                        <i class="material-icons">build</i> Fix Header!
                      </button>
                      <button
                        type="button"
                        class="btn btn-info btn-link"
                        rel="tooltip"
                        data-placement="bottom"
                        title="Refresh"
                      >
                        <i class="material-icons">refresh</i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default btn-link"
                        rel="tooltip"
                        data-placement="bottom"
                        title="Change Date"
                      >
                        <i class="material-icons">edit</i>
                      </button>
                    </div>
                    <h4 class="card-title">Fichiers Traités</h4>
                    <p class="card-category">
                      <span class="text-success"
                        ><i class="fa fa-long-arrow-up"></i> 15%
                      </span>
                      par rapport à l'année prédédente.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">update</i> Just Updated
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-chart">
                  <div
                    class="card-header card-header-info"
                    data-header-animation="true"
                  >
                    <div class="ct-chart" id="completedTasksChart"></div>
                  </div>
                  <div class="card-body">
                    <div class="card-actions">
                      <button
                        type="button"
                        class="btn btn-danger btn-link fix-broken-card"
                      >
                        <i class="material-icons">build</i> Fix Header!
                      </button>
                      <button
                        type="button"
                        class="btn btn-info btn-link"
                        rel="tooltip"
                        data-placement="bottom"
                        title="Refresh"
                      >
                        <i class="material-icons">refresh</i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-default btn-link"
                        rel="tooltip"
                        data-placement="bottom"
                        title="Change Date"
                      >
                        <i class="material-icons">edit</i>
                      </button>
                    </div>
                    <h4 class="card-title">Historique de Connexion</h4>
                    <p class="card-category">Tentative de connexion</p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">update</i> Just Updated
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-warning card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons">weekend</i>
                    </div>
                    <p class="card-category">Professuers</p>
                    <h3 class="card-title">45</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">update</i> Just Updated
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-rose card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons">equalizer</i>
                    </div>
                    <p class="card-category">Filiéres</p>
                    <h3 class="card-title">16</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                     <i class="material-icons">update</i> Just Updated
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons">store</i>
                    </div>
                    <p class="card-category">Modules</p>
                    <h3 class="card-title">200</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">update</i> Just Updated
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                      <i class="fa fa-twitter"></i>
                    </div>
                    <p class="card-category">Notes</p>
                    <h3 class="card-title">4500</h3>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">update</i> Just Updated
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
    if(!(this.$session.has("userType") === false)){
      switch(this.$session.get('userType')){
        case "Resp": this.$router.push('/') ; break;
        case "Prof":  this.$router.push('/'); break;
        default: console.log("default"); break;
      }
    }else{
      this.$router.push('/login')
    }
  },
  beforeCreate() {
    this.$session.start();
    console.log("executed")
  },
};
</script>

<style>

</style>
