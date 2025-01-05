import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

const serverIp = process.env.REACT_APP_Server_IP;

export const getProducts = async () => { 
  // let response: IGetProductsResponse;

  // if (isProduction) {
   let response = await axios.get(
      // 'https://react-shopping-cart-67954.firebaseio.com/products.json'
      serverIp + '/products'
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
