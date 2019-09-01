import Vue from "vue";
import App from "./App.vue";
import createStore from "./store";
import createRouter from "./routes";
import ElementUI from "element-ui";
import MedusaUI from "../packages/index";
import "element-ui/lib/theme-chalk/index.css";
import Http from "./libs/axios";

import { IInstance } from "./interface";

Vue.use(ElementUI);
Vue.use(MedusaUI);

Vue.config.productionTip = false;

export const createInstance = ({
  storeModule,
  routeModule,
  install,
}: IInstance) => {
  install(Vue);
  return new Vue({
    store: createStore(storeModule),
    router: createRouter(routeModule),
    render: h => h(App),
  }).$mount("#app");
};

export { Http };
