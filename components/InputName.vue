<script setup lang="ts">
import { useChatStore } from "../stores/chatStore";
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
const store = useChatStore();
const userName: Ref<string> = ref("");
function inputName(): void {
  store.chatAutor = userName.value;
}
</script>

<template>
  <form class="form" @submit.prevent="inputName">
    <input
      class="input"
      type="text"
      v-model="userName"
      :placeholder="props.message"
    />
    <ButtonComplete>Сохранить</ButtonComplete>
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
