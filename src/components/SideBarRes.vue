<template>
  <div class="sidebar-wrapper">
    <user/>
    <ul class="nav">
      <li class="nav-item active ">
        <a class="nav-link" href="/resp">
          <i class="material-icons">dashboard</i>
          <p>Dashboard</p>
        </a>
      </li>

      <li class="nav-item ">
        <a class="nav-link" data-toggle="collapse" href="#pagesExamples">
          <i class="material-icons">image</i>
          <p>
            Gestion
            <b class="caret"></b>
          </p>
        </a>
        <div class="collapse" id="pagesExamples">
          <ul class="nav">
            <li class="nav-item ">
              <a class="nav-link" href="/Gmodule">
                <span class="sidebar-mini"> M </span>
                <span class="sidebar-normal"> Modules </span>
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="/Gprof">
                <span class="sidebar-mini"> P </span>
                <span class="sidebar-normal"> Professeurs </span>
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="Gclass">
                <span class="sidebar-mini"> M </span>
                <span class="sidebar-normal"> Matière </span>
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="GsY">
                <span class="sidebar-mini"> A </span>
                <span class="sidebar-normal"> Année Universitaire </span>
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="Gsemester">
                <span class="sidebar-mini"> S </span>
                <span class="sidebar-normal"> Semestres </span>
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="Gfield">
                <span class="sidebar-mini"> F </span>
                <span class="sidebar-normal"> Filières </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import user from "./user";
export default {
  components: {
    user
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  beforeMount() {
    
    console.log(this.$session.get('userType'))
    if(typeof this.$session.has("userType") !== "undefined"){
      switch(this.$session.get('userType')){
        case "Admin": this.$router.push('/') ; break;
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

<style scoped></style>
