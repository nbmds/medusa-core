import { ModuleTree } from "vuex";
import { RouteConfig } from "vue-router";
export interface IInstance {
  storeModule: ModuleTree<any>;
  routeModule: RouteConfig[];
}

export interface IBaseResponse<T = any> {
  statusCode: number;
  systemTime: number;
  data: T;
}
