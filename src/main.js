import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// import component
import RsComponent from "./components";

// import Formkit library
import { plugin, defaultConfig } from "@formkit/vue";
import formkitConfig from "../formkit.config.js";

// import 3rd party libraries
import i18n from "./libs/i18n/index";
import CountryFlag from "vue3-country-flag-icon";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueFeather from "vue-feather";
import VueCodeHighlight from "vue-code-highlight";
import FloatingVue from "floating-vue";
import SDropdown from "@storinka/dropdown";
import VueClickAway from "vue3-click-away";
import Maska from "maska";

// import chart libraries
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Icons from "@/assets/js/fontawesome.js";

library.add(Icons);

// import css and style files
import "./assets/style/tailwind.css";
import "./assets/style/scss/index.scss";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import "vue3-country-flag-icon/dist/CountryFlag.css";
import "vue-code-highlight/themes/prism-okaidia.css";
import "vue-code-highlight/themes/window.css";
import "floating-vue/dist/style.css";

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
app.use(plugin, defaultConfig(formkitConfig));
app.use(VueClickAway);
app.use(Maska);

app.component("country-flag", CountryFlag);
app.component(VueFeather.name, VueFeather);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
