import { createInput } from "@formkit/vue";
import OneTimePassword from "@/components/form/OneTimePassword.vue";
import MaskText from "@/components/form/TextMask.vue";
import FileDropzone from "@/components/form/FileDropzone.vue";
import WizardForm from "@/components/form/WizardForm.vue";

export default {
  otp: createInput(OneTimePassword, {
    props: ["digits"],
  }),
  mask: createInput(MaskText, {
    props: ["mask"],
  }),
  dropzone: createInput(FileDropzone, {
    props: ["accept", "multiple", "maxSize", "minSize", "maxFiles", "disabled"],
  }),
  wizard: createInput(WizardForm, {
    props: ["steps", "currentStep"],
  }),
};
