import actions from "./actions";

const dataCustomers = [
  {
    email: "zaky@mail.com",
    fullname: "zaky arifudin",
    phone: "08192128191",
    address: "Jepara",
  },
  {
    email: "deni@mail.com",
    fullname: "deni alian",
    phone: "08192128192",
    address: "Semarang",
  },
  {
    email: "inda@mail.com",
    fullname: "inda amanda",
    phone: "08192128193",
    address: "Yogyakarta",
  },
];

const initState = {
  customers: dataCustomers,
  customer: null,
};

export default function customerReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_CUSTOMERS: {
      return {
        ...state,
      };
    }

    case actions.GET_CUSTOMER: {
      return {
        ...state,
        customer: null,
      };
    }

    default: {
      return state;
    }
  }
}
