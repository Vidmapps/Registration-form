<template>
  <div>
    <form class="form-style">
      <div class="form-group">
        <label for="name">Full name</label>
        <input
          v-model="thisCustomer.name"
          placeholder="Full name"
          class="form-control"
          id="name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="thisCustomer.email"
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
          v-model="thisCustomer.address.city"
          placeholder="City"
          class="form-control"
          id="city"
          required
        />
      </div>
      <div class="form-group">
        <label for="street">Street</label>
        <input
          v-model="thisCustomer.address.street"
          placeholder="Street"
          class="form-control"
          id="street"
          required
        />
      </div>
      <div class="form-group">
        <label for="houseNumber">House number</label>
        <input
          v-model="thisCustomer.address.houseNumber"
          placeholder="House number"
          class="form-control"
          id="houseNumber"
          required
        />
      </div>
      <div class="form-group">
        <label for="zipCode">Zip code</label>
        <input
          v-model="thisCustomer.address.zipCode"
          placeholder="Zip code"
          class="form-control"
          id="zipCode"
          required
        />
      </div>
      <div class="text-center">
        <button class="btn-success btn-style" @click="onUpdatedCustomer(thisCustomer)">
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
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["onUpdatedCustomer"]),
    cancelEdit() {
      location.reload();
    },
  },
  computed: {
    ...mapGetters(["thisCustomer"]),
  }
};
</script>
