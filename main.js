const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Beautiful Socks on Sale!',
      image: './assets/images/socks_green.jpg',
      url: 'https://naver.com',
      inStock: false,
      inventory: 5,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' }
      ],
      sizes: ['small', 'medium', 'large']
    }
  }
})