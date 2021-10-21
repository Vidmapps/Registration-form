const getCustomers =
  localStorage.getItem("customers") !== "undefined" &&
  localStorage.getItem("customers") !== null
    ? JSON.parse(localStorage.getItem("customers"))
    : [];

const saveCustomers = () => {
  localStorage.setItem("customers", JSON.stringify(state.customers));
};
const state = {
  customers: [],
  currentCustomer: [],
};

const getters = {
  allCustomers: (state) => state.customers,
  thisCustomer: (state) => state.currentCustomer,
};

const actions = {
  fetchCustomers({ commit }) {
    commit("setCustomers", getCustomers);
  },
  onDelete({ commit }, id) {
    "setCustomers", commit("removeCustomer", id);
  },
  onSubmitData({ commit }, newCustomer) {
    "setCustomers", commit("newCustomer", newCustomer);
  },
  onEdit({ commit }, customer) {
    commit("setCustomer", customer);
  },
  onUpdatedCustomer({ commit }, thisCustomer) {
    commit("updateCustomer", thisCustomer);
  },
};

const mutations = {
  setCustomers: (state, customers) => {
    state.customers = customers;
    saveCustomers();
  },
  setCustomer: (state, currentCustomer) =>
    (state.currentCustomer = currentCustomer),
  removeCustomer: (state, id) => {
    state.customers = state.customers.filter((customer) => customer.id !== id);
    saveCustomers();
  },
  newCustomer: (state, customer) => {
    (customer.id = new Date().toISOString()), state.customers.push(customer);
    saveCustomers();
  },
  updateCustomer: (state, updCustomer) => {
    const index = state.customers.findIndex(
      (customer) => customer.id === updCustomer.id
    );
    state.customers.splice(index, 1, updCustomer);
    saveCustomers();
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
