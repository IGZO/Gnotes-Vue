<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="float-left">
        <ul>
          <li>
            <a>
              MBDIO
            </a>
          </li>
          <li>
            <a  href='http://ensam-casa.ma/'>
              ENSAM Casablanca
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright float-right">
            &copy;
            {{new Date().getFullYear()}}, made with <i class="material-icons">favorite</i> by
            <a href="" target="_blank">MBDIO </a> for a better ENSAM Casablanca.
          </div>
    </div>
  </footer>
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
