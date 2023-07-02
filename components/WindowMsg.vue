<script setup lang="ts">
import { useChatStore } from "../stores/chatStore";
import deleteMsg from "../composables/useDeleteMsg";
import { Message } from "../types/index";
const store = useChatStore();
const { $io } = useNuxtApp();
$io.on("message", (data: Message) => {
  store.chatMsgs.push(data);
});
</script>

<template>
  <div class="window-msg">
    <div class="window_msg_chat" v-for="(msg, i) of store.chatMsgs" :key="i">
      <div v-if="msg.autor === store.chatAutor" class="person_msg msg">
        <span class="autor-msg">
          {{ msg.autor + ":" }}
        </span>
        <div class="delete-icon">
          <p class="msg-body">{{ msg.msg }}</p>
          <button @click="deleteMsg(store.chatMsgs, i)">
            <img class="favicon" src="../assets/delete.ico" alt="" />
          </button>
        </div>
      </div>
      <div v-else class="other_msg msg">
        <span class="autor-msg">
          {{ msg.autor + ":" }}
        </span>
        <div class="delete-icon">
          <p class="msg-body">{{ msg.msg }}</p>
          <button @click="deleteMsg(store.chatMsgs, i)">
            <img class="favicon" src="../assets/delete.ico" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.window-msg {
  margin: auto;
  height: 75vh;
  width: 75vw;
  overflow-y: auto;
  border-bottom: 2px solid rgba(0, 128, 0, 0.208);
}
.window_msg_chat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.person_msg {
  align-self: flex-end;
}

.msg {
  max-width: 180px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  margin: 5px;
  font-size: 12px;
  font-family: cursive;
  border: 1px solid rgba(0, 0, 0, 0.105);
  border-radius: 25px;
}
.msg-body {
  margin: 0;
  overflow: hidden;
  word-wrap: break-word;
}
.delete-icon {
  display: flex;
  justify-content: space-between;
}
.autor-msg {
  font-size: 8px;
  font-family: Arial;
  opacity: 0.7;
}
button {
  border: none;
  background-color: rgb(0, 0, 0, 0);
}
.favicon {
  width: 10px;
  height: 10px;
  cursor: pointer;
  opacity: 0.6;
}
.favicon:active {
  transform: rotate(25deg);
}
</style>
