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