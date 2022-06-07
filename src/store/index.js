import { createStore } from "vuex";
import layout from "./layout";
import auth from "./auth";
import theme from "./theme";

export default createStore({
  modules: {
    layout,
    theme,
    auth,
  },
  strict: process.env.ENVIRONMENT !== "production",
});
