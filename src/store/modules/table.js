export default ({
  state: {
    staff: JSON.parse(localStorage.getItem('staff')),
  },
  getters: {
    getStaff: (state) => {return state.staff},
  },
  mutations: {
    setStaff: (state, payload) => {
      if (payload.indexStaff === null) {
        state.staff.push(payload.newStaff);
      } else {
        state.staff.splice(payload.indexStaff, 1, payload.newStaff);
      }
      localStorage.setItem('staff', JSON.stringify(state.staff))
    },
    deletStaff: (state, indexStaff) => {
      state.staff.splice(indexStaff, 1);
      localStorage.setItem('staff', JSON.stringify(state.staff));
    },
  },
  actions: {
  },
})