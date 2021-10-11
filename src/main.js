import Vue from "vue";
import App from "./App.vue";
import CustomerAddForm from "@/components/CustomerAddForm";
import CustomerData from "@/components/CustomerData";
import CustomerEditForm from "@/components/CustomerEditForm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.component("customer-add-form", CustomerAddForm);
Vue.component("customer-data", CustomerData);
Vue.component("customer-edit-form", CustomerEditForm);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
