import { fetchProductList } from "./ProductService.js";

export default function ProductListPage({ $target }) {
  console.log(fetchProductList());
  const $page = document.createElement("div");
  $page.className = "ProductListPage";

  $page.innerHTML = "<h1>상품목록</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
}
