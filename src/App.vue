<template>
  <div class="p-2">
    <section id="app">
      <h1 class="text-center">Customers registration</h1>
      <div class="d-flex justify-content-around p-4">
        <customer-add-form v-if="!showEditForm" />
        <customer-edit-form
          v-if="showEditForm"
        />
      </div>
      <div v-if="showCustomersList">
        <h2>Customers list</h2>
        <div class="table-responsive">
          <table class="table-striped">
            <thead>
              <tr>
                <th class="table-padding" scope="col">Id</th>
                <th class="table-padding" scope="col">Name</th>
                <th class="table-padding" scope="col">Email</th>
                <th class="table-padding" scope="col">City</th>
                <th class="table-padding" scope="col">Street</th>
                <th class="table-padding" scope="col">House number</th>
                <th class="table-padding" scope="col">Zip code</th>
                <th class="table-padding" scope="col">Coordinates</th>
              </tr>
            </thead>
            <tbody>
              <customer-data
                v-for="customer in allCustomers"
                :key="customer.id"
                :customer="customer"
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      updateCustomer: [
        {
          id: "",
          name: "",
          email: "",
          address: {
            city: "",
            street: "",
            houseNumber: "",
            zipCode: "",
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchCustomers", "deleteCustomers"]),
    updatedCustomer(updatedCustomer) {
      this.$set(
        this,
        "customers",
        this.customers.filter((customer) => customer.id !== updatedCustomer.id)
      );
      this.customers.push(updatedCustomer);
      this.customers.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
      this.showEditForm = false;
    },
  },
  computed: {
    ...mapGetters(["allCustomers", "thisCustomer"]),
    showCustomersList() {
            console.log(this.allCustomers)
      if (this.allCustomers) {
        return this.allCustomers.length > 0;
      }
      return false;
    },
    showEditForm() {
      if (this.thisCustomer.id) {
        return true
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
