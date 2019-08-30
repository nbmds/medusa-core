import Vue from "vue";
import Vuex, { ModuleTree } from "vuex";
import user from "./modules/user";

Vue.use(Vuex);

export default function(modules: ModuleTree<any>) {
  return new Vuex.Store({
    modules: { user, ...modules },
  });
}
