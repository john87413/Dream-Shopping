import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

class ProductService {
  static async getAllProducts() {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/products/all`);
  }

  static async getProductsByPage(page, category) {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`);
  }

  static async getProductById(id) {
    return axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`);
  }
}

export default ProductService;
