<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
const newMsg: Ref<string> = ref("");
const emit = defineEmits(["update"]);
function addMessage(str: string): void {
  emit("update", str);
  newMsg.value = "";
}
</script>

<template>
  <form class="form" @submit.prevent="addMessage(newMsg)">
    <input
      class="input"
      type="text"
      v-model="newMsg"
      :placeholder="props.message"
    />
    <ButtonComplete>Отправить</ButtonComplete>
  </form>
</template>
<style scoped lang="scss">
.form {
  padding-top: 25px;
  margin: auto;
}
.input {
  height: 25px;
  margin: 0 15px;
  font-size: 14px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 5px;
}
.input::placeholder {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 14px;
}
.input:focus::placeholder {
  color: #f6f6f6;
}
input[type~="text"] {
  font-family: cursive;
  font-size: 12px;
}
</style>
