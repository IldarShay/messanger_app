import { defineStore } from "pinia";
import { Message } from "../types/index";
export const useChatStore = defineStore("chatStore", () => {
  const chatAutor: Ref<string> = ref("");
  const chatMsgs: Message[] = reactive([]);

  return {
    chatAutor,
    chatMsgs,
  };
});
