import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => { 
  // let response: IGetProductsResponse;

  // if (isProduction) {
   let response = await axios.get(
      // 'https://react-shopping-cart-67954.firebaseio.com/products.json'
      '//localhost:8080/products'
    );
  // } else {
  //   response = require('static/json/products.json');
  // }

  // console.log("aa=>" + (response.data.data.products))

  // if (response.data.products && Array.isArray(response.data.products)) {
  //   console.log("TET")
  // }
  

  const { products } = response.data || [];

  // console.log("products=> "+ products)

  return products;
};
