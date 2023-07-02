export type Message = {
  autor: string;
  msg: string;
  role?: string;
};

export enum Roles {
  GUEST = "guest",
  USER = "user",
}
