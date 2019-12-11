<template>
  <div class="sidebar-wrapper">
    <user/>
    <ul class="nav">
      <li class="nav-item active ">
        <a class="nav-link" href="/prof">
          <i class="material-icons">dashboard</i>
          <p>Dashboard</p>
        </a>
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
  }
};
</script>

<style scoped></style>
