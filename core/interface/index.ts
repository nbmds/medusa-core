import { VueConstructor } from "vue";
import { ModuleTree } from "vuex";
import { RouteConfig } from "vue-router";
/**
 * @description medusa 实例参数
 * @export
 * @interface IInstance
 */
export interface IInstance {
  storeModule: ModuleTree<any>;
  routeModule: RouteConfig[];
  install?(vue: VueConstructor): void;
}

/**
 * @description ajax res基础返回体
 * @export
 * @interface IBaseResponse
 * @template T
 */
export interface IBaseResponse<T = any> {
  statusCode: number;
  systemTime: number;
  data: T;
}
