import { Server } from "socket.io";
import { defineNuxtModule } from "@nuxt/kit";
import { Message } from "types";

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook("listen", async (server) => {
      const io = new Server(server);
      const chat: Message[] = [];
      nuxt.hook("close", () => io.close());

      io.on("connection", (socket) => {
        console.log(`Socket connected: ${socket.id}`);
        socket.on("message", (msg) => {
          chat.push(msg);
          socket.broadcast.emit("message", msg);
        });
        socket.on("disconnect", (reason) => {
          console.log(reason);
        });
      });
    });
  },
});
