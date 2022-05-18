import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// import component
import RsComponent from "./components";

// import 3rd party libraries
import i18n from "./libs/i18n/index";
import CountryFlag from "vue3-country-flag-icon";
import VueFeather from "vue-feather";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import FloatingVue from "floating-vue";
import SDropdown from "@storinka/dropdown";
import VueCodeHighlight from "vue-code-highlight";

// import css and style files
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import "vue3-country-flag-icon/dist/CountryFlag.css";
import "floating-vue/dist/style.css";
import "./assets/style/tailwind.css";
import "./assets/style/scss/index.scss";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

const app = createApp(App);
app.config.productionTip = false;

app.use(store);
app.use(router);

RsComponent.registerComponent(app);

app.use(i18n);
app.use(PerfectScrollbar);
app.use(FloatingVue);
app.use(SDropdown);
app.use(VueCodeHighlight);

app.component("country-flag", CountryFlag);
app.component(VueFeather.name, VueFeather);

app.mount("#app");
