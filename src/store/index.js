import { createStore } from "vuex";
import layout from "./layout";
import auth from "./auth";

export default createStore({
  modules: {
    layout,
    auth,
  },
  strict: process.env.ENVIRONMENT !== "production",
});
