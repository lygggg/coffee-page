import { getProductlist } from "./apis/Product";

export const fetchProductList = async () => {
  console.log();
  try {
    return await getProductlist();
  } catch (e) {
    console.error(e);
  }
};
