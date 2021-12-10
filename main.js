const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    popCart(id) {
      const itemIndexInCart = this.cart.indexOf(id);
      console.log(itemIndexInCart);
      if(itemIndexInCart < 0) return;
      this.cart.splice(itemIndexInCart, 1);
    }
  },
})