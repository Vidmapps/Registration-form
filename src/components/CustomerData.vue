<template>
  <tr v-if="customer.id !== ''">
    <th class="table-padding" scope="row">{{ customer.id }}</th>
    <td class="table-padding">{{ customer.name }}</td>
    <td class="table-padding">{{ customer.email }}</td>
    <td class="table-padding">{{ customer.address.city }}</td>
    <td class="table-padding">{{ customer.address.street }}</td>
    <td class="table-padding">{{ customer.address.houseNumber }}</td>
    <td class="table-padding">{{ customer.address.zipCode }}</td>
    <td class="table-padding">
      <div v-if="showLoading">Loading...</div>
      <div>
        <div>{{ latitude }}</div>
        <div>{{ longitude }}</div>
      </div>
    </td>
    <td class="td-btn table-padding" >
      <button class="btn-success btn-style" @click="onLocatorButtonPressed">Load location</button>
      <button class="btn-warning btn-style" @click="onEdit">Edit customer</button>
      <button class="btn-danger btn-style" @click="onDelete">Delete customer</button>
    </td>
  </tr>
</template>

<script>
function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

export default {
  emits: ['edit-customer', 'delete-customer'],
  props: ['customer'],
  data() {
    return {
      isLoading: false,
      latitude: '',
      longitude: ''
    }
  },
  computed: {
    showLoading() {
      return this.isLoading && (this.latitude === '' || this.longitude === '');
    }
  },
  methods: {
    onEdit() {
      this.$emit('edit-customer',
          this.customer,
      )
    },
    async onLocatorButtonPressed() {
      try {
        this.isLoading = true;
        const geoLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        const keyAPI = process.env.VUE_APP_SECRET_API_KEY;
        const populateHeader = (obj) => {
          let latitude = obj.results[0].geometry.location.lat;
          let longitude = obj.results[0].geometry.location.lng;
          this.latitude = "latitude: " + latitude;
          this.longitude = "longitude: " + longitude;
        }
        let plusCity = this.customer.address.city.replaceAll(' ', '+');
        let plusStreet = this.customer.address.street.replaceAll(' ', '+');
        let plusHouseNumber = this.customer.address.houseNumber.replaceAll(' ', '+');
        let requestURL = `${geoLink}${plusHouseNumber}+${plusStreet}+${plusCity}+&key=${keyAPI}`;

        const response = await makeRequest('GET', requestURL);
        populateHeader(response);
      } catch (error) {
        alert('Error is ' + error);
      } finally {
        this.isLoading = false;
      }


    },
    onDelete() {
      this.$emit('delete-customer',
       this.customer.id,
      )
    }
  },
}
</script>

<style scoped>
  .td-btn {
    display: grid;
  }
</style>
