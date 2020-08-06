/**
 * TODO: Handle errors here too
 */


import axios from "axios";

const baseUrl = 'https://dart-agrivator.herokuapp.com';

export const getProducts = async () => {
    const res = await axios.get(`${baseUrl}/products`);
    const data = res.data;
    return data;
}

/*
Post product schema
{
  "name": "string",
  "description": "string",
  "category": "fruitsAndVegetables",
  "product_inventories": [
    "string"
  ],
  "subCategory": "vegetables",
  "created_by": "string",
  "updated_by": "string"
}
*/

// export const postProducts = async (product) => {

// }