<script setup lang="ts">
const msgs = [
  { autor: "Ildar", msg: "Hello" },
  { autor: "Liya", msg: "lorem10sdsdfsdssdfsdfddddddddddddddddddd" },
  {
    autor: "Ildar",
    msg: "I am w all day. But i`m happy!",
  },
];
</script>

<template>
  <div class="window-msg">
    <div class="window_msg_chat" v-for="(msg, i) of msgs">
      <div v-if="msg.autor === 'Ildar'" class="person_msg msg">
        <span class="autor-msg">
          {{ msg.autor + ":" }}
        </span>
        {{ msg.msg }}
      </div>
      <div v-else class="other_msg msg">
        <span class="autor-msg">
          {{ msg.autor + ":" }}
        </span>
        {{ msg.msg }}
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
  // overflow: hidden;
  word-wrap: break-word;
}
.autor-msg {
  font-size: 8px;
  font-family: Arial;
}
</style>
