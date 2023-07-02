<script setup lang="ts">
import { useChatStore } from "../stores/chatStore";
import { Roles, Message } from "../types/index";
const { $io } = useNuxtApp();
const store = useChatStore();
function addMessage(str: string) {
  if (!str.trim()) return false;
  const newMessage: Message = {
    autor: store.chatAutor,
    msg: str.trim(),
    role: Roles.USER,
  };
  store.chatMsgs.push(newMessage);
  $io.emit("message", newMessage);
}
</script>

<template>
  <div class="container">
    <WindowMsg id="chat"></WindowMsg>
    <InputName
      v-if="!store.chatAutor"
      class="input-msg"
      message="Ваше имя"
    ></InputName>
    <InputMsg
      v-else
      @update="addMessage"
      class="input-msg"
      message="Cообщение ..."
    ></InputMsg>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
}
.container {
  margin: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ;
}
</style>
