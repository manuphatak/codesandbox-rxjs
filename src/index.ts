import { init } from "./app";
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(init);
}

init();
