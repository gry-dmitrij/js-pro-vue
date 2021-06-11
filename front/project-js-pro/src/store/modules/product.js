import query from '../../api/query';
import { FILL_PRODUCTS } from './products-type';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    products: (state) => state.products,
  },
  mutations: {
    [FILL_PRODUCTS](state, products) {
      state.products = products;
    },
  },
  actions: {
    getProducts({ commit }, url) {
      query.getJson(url)
        .then((data) => {
          commit(FILL_PRODUCTS, data);
        });
    },
  },
};
