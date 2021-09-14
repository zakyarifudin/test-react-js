const actions = {
  GET_CUSTOMERS: "@post/GET_CUSTOMERS",
  GET_CUSTOMER: "@post/GET_CUSTOMER",

  getCustomers: () => ({
    type: actions.GET_CUSTOMERS,
  }),

  getCustomer: (email) => ({
    type: actions.GET_CUSTOMER,
    payload: {
      email,
    },
  }),
};

export default actions;
