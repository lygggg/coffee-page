import { getProductlist } from "./apis/Product.js";

export async function fetchProductList() {
  try {
    return await getProductlist();
  } catch (e) {
    alert(e);
  }
}
