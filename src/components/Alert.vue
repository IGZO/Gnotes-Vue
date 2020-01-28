<template>
  <div :class="type">
    <strong>{{type}}!</strong> {{msg}}
  </div>
</template>

<script>
export default {
  props: ['type','msg'],
  data() {
    return {
      
    };
  }
};
</script>

<style>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.success {
  padding: 20px;
  background-color: #4CAF50;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
