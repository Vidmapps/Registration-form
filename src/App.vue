<template>
  <div class="p-2">
    <section id="app">
      <h1 class="text-center">Customers registration</h1>
      <div class="d-flex justify-content-around p-4">
        <customer-add-form v-if="!showEditForm" @addCustomer="addCustomer" />
        <customer-edit-form
          v-if="showEditForm"
          @updatedCustomer="updatedCustomer"
          :updateCustomer="updateCustomer[0]"
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
                v-for="customer in customers"
                :key="customer.id"
                :customer="customer"
                @edit-customer="editCustomer"
                @delete-customer="deleteCustomer"
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditForm: false,
      customers:
        localStorage.getItem("customers") !== "undefined" &&
        localStorage.getItem("customers") !== null
          ? JSON.parse(localStorage.getItem("customers"))
          : [],
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
    addCustomer(newCustomer) {
      const newCustomerData = {
        id: new Date().toISOString(),
        name: newCustomer.name,
        email: newCustomer.email,
        address: {
          city: newCustomer.address.city,
          street: newCustomer.address.street,
          houseNumber: newCustomer.address.houseNumber,
          zipCode: newCustomer.address.zipCode,
        },
      };
      this.customers.push(newCustomerData);
      localStorage.setItem("customers", JSON.stringify(this.customers));
    },
    editCustomer(editedCustomer) {
      this.updateCustomer[0].id = editedCustomer.id;
      this.updateCustomer[0].name = editedCustomer.name;
      this.updateCustomer[0].email = editedCustomer.email;
      this.updateCustomer[0].address.city = editedCustomer.address.city;
      this.updateCustomer[0].address.street = editedCustomer.address.street;
      this.updateCustomer[0].address.houseNumber =
        editedCustomer.address.houseNumber;
      this.updateCustomer[0].address.zipCode = editedCustomer.address.zipCode;
      this.showEditForm = true;
    },
    deleteCustomer(customerId) {
      this.customers = this.customers.filter(
        (customer) => customer.id !== customerId
      );
    },
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
    showCustomersList() {
      if (Array.isArray(this.customers)) {
        return this.customers.length > 0;
      }
      return false;
    },
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
