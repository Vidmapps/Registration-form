<template>
  <div class="p-2">
    <section id="app">
      <h1 class="text-center">Customers registration</h1>
      <div class="d-flex justify-content-around p-4">
        <customer-add-form v-if="!showEditForm" />
        <customer-edit-form v-if="showEditForm" />
      </div>
      <customers-list v-if="showCustomersList" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
   methods: {
    ...mapActions(["fetchCustomers"]),
  },
  computed: {
    ...mapGetters(["allCustomers", "thisCustomer"]),
    showCustomersList() {
      if (this.allCustomers) {
        return this.allCustomers.length > 0;
      }
      return false;
    },
    showEditForm() {
      if (this.thisCustomer.id) {
        return true;
      }
      return false;
    },
  },
  created() {
    if (this.allCustomers !== undefined) {
      this.fetchCustomers();
    }
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table-padding {
  padding: 10px 20px;
}
.table td {
  vertical-align: inherit;
}
.table thead th {
  border-bottom: none;
}
.form-style {
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
}
.btn-style {
  width: 160px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 5px;
}
</style>
