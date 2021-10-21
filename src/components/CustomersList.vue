<template>
  <div>
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
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style></style>
