import { ISignForm } from "./interface";
import api from "../libs/request";

export const signIn = (data: ISignForm) => {
  return api.get<{ test: "msg" }>("/api/sign/in", data);
};
