import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import VueAxios from 'vue-axios'
Vue.use(Vuex, axios)


export default new Vuex.Store({
  state: {
    products: [{
        name: "Banana Skin",
        price: 20
      },
      {
        name: "Shiny Star",
        price: 40
      },
      {
        name: "Green Shells",
        price: 60
      },
      {
        name: "Red Shells",
        price: 80
      },
    ],
    posts:[]
  },
  getters: {
    saleProducts: state => {
      var saleProduct = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProduct
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach((product) => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      context.commit("reducePrice", payload)

    }
  }
})