<template>
   <div class="user">
      <div class="photo">
        <img src="static/assets/img/faces/avatar.jpg" />
      </div>
      <div class="user-info">
        <a data-toggle="collapse" href="#collapseExample" class="username">
          <span>
            Meriem Elhadi
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
  }
};
</script>

<style scoped></style>
