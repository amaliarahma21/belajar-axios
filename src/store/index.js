import { createStore } from "vuex";

import axios from "axios"
export default createStore({
    state: {
        products: []
    },
    getters: {
        getProducts: (state) => state.products,
        //   get single product
            getProductById: (state) => (productId) => {
                console.log("Fetching single product by ID:", productId);
                console.log("ProductData:", state.productData);
                const product = state.productData.find((p) => p.id == productId);
                console.log("Product:", product);
                return product;
            },
    },
    actions:{
        async fetchProduct({ commit }) {
            try {
                const dataProduct = await
                axios.get("https://fakestoreapi.com/products")
                commit('SET_PRODUCT', dataProduct.data)
            }catch ( error ) {
                alert('Ada Error')
                console.log(error)
            }
        }
    },
    mutations:{
        SET_PRODUCT(state, products){
            state.products = products
        },
        SET_PRODUCT(state, products){
            state.products = products
        }
    }
})