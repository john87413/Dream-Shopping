import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

class ProductService {
  static async getAllProducts() {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/products/all`);
  }

  static async getProductsByPage(page) {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/products?page=${page}`);
  }

  static async getProduct(id) {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`);
  }
}

export default ProductService;
