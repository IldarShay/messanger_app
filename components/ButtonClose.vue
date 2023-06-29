<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 5px;
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: normal;
  text-decoration: none;
  color: #fff;
  background-color: #cd0505;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  transition: box-shadow 0.18s ease-out, background 0.18s ease-out,
    color 0.18s ease-out;
}
.btn:focus-visible {
  box-shadow: 0 0 0 3px lightskyblue;
}
.btn:hover {
  box-shadow: 0 1px 1px 0 #cfcfcf, 0 2px 5px 0 #cfcfcf;
}
.btn:active {
  background-color: #8c0505 !important;
  transform: scale(0.96);
}
</style>
