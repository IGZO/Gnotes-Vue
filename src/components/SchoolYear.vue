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
                  
                  <h4 class="card-title">Nouvelle Année Universitaire</h4>
                </div>
                <div class="card-body ">
                  <form method="#" action="#">
                    <div class="form-group">
                      <label for="Text" class="bmd-label-floating">Année Universitaire</label>
                      <input v-model="SchoolYear.name" type="text" class="form-control" >
                    </div>
                    
                    
                  </form>
                </div>
                <div class="card-footer ">
                  <button type="submit" class="btn btn-fill btn-rose" @click="postSchoolYear()">Envoyer</button>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-rose card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">assignment</i>
                  </div>
                  <h4 class="card-title">Liste des Années Universitaires</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">ID</th>
                          <th>Année Universitaire</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="SchoolYear in SchoolYears" >
                          <td class="text-center">{{SchoolYear.id}}</td>
                          <td>{{SchoolYear.name}}</td>
                          
                          <td class="td-actions text-right">
                            
                            
                            <button
                              type="button"
                              rel="tooltip"
                              class="btn btn-danger btn-link"
                              @click="delSchoolYear(SchoolYear)"
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
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import SideBarRes from "./SideBarRes";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from 'axios';

export default {
  components: {
    SideBarRes,
    NavBar,
    Footer
  },
  data() {
    return {
      SchoolYear:{
        name: ''
      },
      SchoolYears: []
    };
  },
  methods:{
    postSchoolYear:function(){
      if(this.SchoolYear.name)
      axios.post(this.BaseUrl+'SchoolYears',this.SchoolYear)
        .then(response => {
          console.log(response)
          this.SchoolYears.push(response.data);  
          
        }).catch(error => {
          console.log(error)
        });
    },
    delSchoolYear:function(item){
      
      if(item.id)
      axios.delete(this.BaseUrl+'SchoolYears/'+item.id)
        .then(response => {
          console.log(response)
          //.pop(response.data); 

          //var array = [2, 5, 9];
          //console.log(array)
          var index = this.SchoolYears.indexOf(item);
          if (index > -1) {
            this.SchoolYears.splice(index, 1);
          }

        }).catch(error => {
          console.log(error)
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
    axios.get(this.BaseUrl+'SchoolYears')
      .then(response => {
        console.log(response)
        this.SchoolYears = response.data;  
      }).catch(error => {
        console.log(error)
      });
  }
};
</script>

<style></style>
