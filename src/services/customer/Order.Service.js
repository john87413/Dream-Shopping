import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

class OrderService {
  static async getAllOrders() {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/orders`);
  }

  static async getOrderByID(orderId) {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/order/${orderId}`);
  }

  static async createOrder(order) {
    return axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: order });
  }
}

export default OrderService;
