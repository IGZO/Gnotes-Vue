<template>
   <div class="user">
      <div class="photo">
        <img src="static/assets/img/default-avatar.png" />
      </div>
      <div class="user-info">
        <a data-toggle="collapse" href="#collapseExample" class="username">
          <span>
            {{
              $session.get('userType')
            }}
            <!-- <b class="caret"></b> -->
          </span>
        </a>
<!--
        <div class="collapse" id="collapseExample">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="sidebar-mini"> MP </span>
                <span class="sidebar-normal"> Mon profil </span>
              </a>
            </li>
          </ul>
        </div>
        -->
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    
    
  },
  beforeMount() {

  },
  beforeCreate() {
    this.$session.start();
  }
};
</script>

<style scoped></style>
