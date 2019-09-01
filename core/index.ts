import { createInstance, Http } from "./main";
import { VueConstructor } from "vue";
import { IInstance } from "./interface";

export default class Medusa {
  public $medusa: { vm: any } = {
    vm: null,
  };

  constructor({
    storeModule,
    routeModule,
    install = (vue: VueConstructor) => null,
  }: IInstance) {
    this.$medusa.vm = createInstance({ storeModule, routeModule, install });
  }
}

export { Http };
