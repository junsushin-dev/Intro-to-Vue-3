const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'Beautiful Socks on Sale!',
      image: './assets/images/socks_green.jpg',
      url: 'https://naver.com',
      inStock: false,
      inventory: 5,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
      ],
      sizes: ['small', 'medium', 'large']
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(variantImage) {
      this.image = variantImage
    },
    decrementFromCart() {
      this.cart -= 1
    }
  }
})