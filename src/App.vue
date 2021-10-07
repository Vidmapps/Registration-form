<template>
  <div>
    <customer-add-form></customer-add-form>
    <customer-data></customer-data>
    <customer-edit-form></customer-edit-form>
  </div>
</template>

<script>
import CustomerAddForm from './components/CustomerAddForm.vue'
import CustomerData from './components/CustomerData.vue'
import CustomerEditForm from './components/CustomerEditForm.vue'
export default {
  components: { CustomerAddForm, CustomerData, CustomerEditForm },
  name: 'App',
  
}
</script>

<style>

</style>
