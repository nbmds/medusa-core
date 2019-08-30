import { createInstance, Http } from "./main";

export default class Medusa {
  public $medusa: { vm: any } = {
    vm: null,
  };
  constructor({ storeModule, routeModule }) {
    this.$medusa.vm = createInstance({ storeModule, routeModule });
  }
}

export { Http };
