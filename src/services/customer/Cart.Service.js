import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

class CartService {
  static async getCart() {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`);
  }

  static async addToCart(productId, qty) {
    const cart = {
      product_id: productId,
      qty,
    };

    return axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: cart });
  }

  static async updateCart(data) {
    const cart = {
      product_id: data.product_id,
      qty: data.qty,
    };

    return axios.put(`${VITE_URL}/api/${VITE_PATH}/cart/${data.id}`, {
      data: cart,
    });
  }

  static async removeCartItem(id) {
    return axios.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`);
  }

  static async removeAllCartItems() {
    return axios.delete(`${VITE_URL}/api/${VITE_PATH}/carts`);
  }
}

export default CartService;
