import { Message } from "../types/index";

function deleteMsg(array: Message[], i: number): void {
  array.splice(i, 1);
}
export default deleteMsg;
