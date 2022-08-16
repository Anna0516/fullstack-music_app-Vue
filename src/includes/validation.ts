import { Form as VeeForm, Field as VeeField } from "vee-validate";

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install(app: any) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
  },
};
