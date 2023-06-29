<script setup lang="ts"></script>

<template>
  <div class="container">
    <WindowMsg></WindowMsg>
    <InputMsg class="input-msg"></InputMsg>
  </div>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
.container {
  // height: 90vh;
  // width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(45deg, #00dc82, #36e4da, #0047e1);
}
</style>
