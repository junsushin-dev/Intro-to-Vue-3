app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img v-bind:src="image" :class="{ 'out-of-stock-img': !inStock }">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-show="onSale">{{ description }}</p>
        <p>Shipping: {{ shipping }}</p>
        <!-- <p v-if="inStock">In Stock</p> -->
        <!-- <p v-else>Out of Stock</p> -->
        <!-- <p v-show="inStock">In Stock</p> -->
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
        <p v-else>Out of Stock</p>
        <product-details :details="details" ></product-details>
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"></div>
        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          @click="addToCart">
          Add to Cart
        </button>
        <button class="button" @click="decrementFromCart">-1</button>
      </div>
      <a :href="url">buy it here!</a>
    </div>
  </div>`,
  data() {
    return {
      product: 'Socks',
      description: 'Beautiful Socks on Sale!',
      url: 'https://naver.com',
      inventory: 5,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
      sizes: ['small', 'medium', 'large'],
      brand: 'Vue Mastery',
      selectedVariant: 0,
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    decrementFromCart() {
      this.cart -= 1
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product} ${this.onSale ? 'is on sale' : ''}`
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if(this.premium) {
        return 'free'
      }
      return 2.99
    }
  }
})