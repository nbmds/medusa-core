import { ModuleTree } from "vuex";

const modules: ModuleTree<any> = {
  test: {
    namespaced: true,
    state: {
      test: "test",
    },
  },
};

export default modules;
