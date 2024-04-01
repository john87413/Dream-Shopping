import { defineStore } from 'pinia';
import CartService from '@/services/customer/Cart.Service';

export default defineStore({
  id: 'shoppingCart',
  state: () => ({
    shoppingCart: {},
  }),
  actions: {
    async readCart() {
      try {
        const { data } = await CartService.getCart();
        if (data.success) {
          this.shoppingCart = data.data;
        } else {
          //
        }
      } catch (error) {
        //
      }
    },
    async addCart(productId, qty) {
      try {
        const { data } = await CartService.addToCart(productId, qty);
        if (data.success) {
          await this.readCart();
        } else {
          //
        }
      } catch (error) {
        //
      }
    },
    async updateCart(item) {
      try {
        const { data } = await CartService.updateCart(item);
        if (data.success) {
          await this.readCart();
        } else {
          //
        }
      } catch (error) {
        //
      }
    },
    async delCartItem(id) {
      try {
        const { data } = await CartService.removeCartItem(id);
        if (data.success) {
          await this.readCart();
        } else {
          //
        }
      } catch (error) {
        //
      }
    },
    async delAllCartItems() {
      try {
        const { data } = await CartService.removeAllCartItems();
        if (data.success) {
          await this.readCart();
        } else {
          //
        }
      } catch (error) {
        //
      }
    },
  },
  getters: {
  },
});
