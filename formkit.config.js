import { generateClasses } from "@formkit/themes";
import defaultTheme from "@/assets/js/formkit-theme.js";

export default {
  config: {
    classes: generateClasses(defaultTheme),
  },
};
