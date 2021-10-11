<template>
  <div>
    <form class="form-style">
      <div class="form-group">
        <label for="name">Full name</label>
        <input
          v-model="updateCustomer.name"
          placeholder="Full name"
          class="form-control"
          id="name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="updateCustomer.email"
          placeholder="Email"
          type="email"
          class="form-control"
          id="email"
          required
        />
      </div>
      <h3>Address</h3>
      <div class="form-group">
        <label for="city">City</label>
        <input
          v-model="updateCustomer.address.city"
          placeholder="City"
          class="form-control"
          id="city"
          required
        />
      </div>
      <div class="form-group">
        <label for="street">Street</label>
        <input
          v-model="updateCustomer.address.street"
          placeholder="Street"
          class="form-control"
          id="street"
          required
        />
      </div>
      <div class="form-group">
        <label for="houseNumber">House number</label>
        <input
          v-model="updateCustomer.address.houseNumber"
          placeholder="House number"
          class="form-control"
          id="houseNumber"
          required
        />
      </div>
      <div class="form-group">
        <label for="zipCode">Zip code</label>
        <input
          v-model="updateCustomer.address.zipCode"
          placeholder="Zip code"
          class="form-control"
          id="zipCode"
          required
        />
      </div>
      <div class="text-center">
        <button class="btn-success btn-style" @click="updatedCustomer">
          Update Customer
        </button>
      </div>
      <div class="text-center">
        <button class="btn-warning btn-style" @click="cancelEdit">
          Cancel edit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["update-customer"],
  props: ["updateCustomer"],
  methods: {
    updatedCustomer() {
      this.$emit("updatedCustomer", this.updateCustomer);
    },
    cancelEdit() {
      location.reload();
    },
  },
};
</script>
