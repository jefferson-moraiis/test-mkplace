import {
  AddProductPath,
  getByIdProduct,
  getAllProduct,
  updateProduct,
  deleteProduct
} from './paths/'

export default {
  '/product/create': AddProductPath,
  '/products/':getAllProduct,
  '/product/{id}': getByIdProduct,
  '/product/update': updateProduct,
  '/product/delete/{id}': deleteProduct
}
