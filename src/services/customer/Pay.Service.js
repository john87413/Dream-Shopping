import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

class PayService {
  static async pay(orderId) {
    return axios.post(`${VITE_URL}/api/${VITE_PATH}/pay/${orderId}`);
  }
}

export default PayService;
