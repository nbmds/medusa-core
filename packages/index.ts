import { VueConstructor } from "vue";
import MLayout from "./layout";
import "./assets/styles/_base.scss";

const components = [MLayout];

const install = (Vue: VueConstructor) => {
  components.map(component => Vue.component(component.name, component));
};

export default {
  install,
};
