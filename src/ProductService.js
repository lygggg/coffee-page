import { getProductlist } from "./apis/Product.js";

export const fetchProductList = async () => {
  console.log();
  try {
    return await getProductlist();
  } catch (e) {
    console.error(e);
  }
};
