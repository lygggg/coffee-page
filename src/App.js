import ProductListPage from "./ProductListPage.js";
import Basket from "./Basket.js";
import ProductDetailPage from "./ProductDetailPage.js";

export default function App({ $target }) {
  console.log($target);
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    }

    if (pathname === "/basket") {
      new Basket({ $target }).render();
    }

    if (pathname === "/detailpage") {
      new ProductDetailPage({ $target }).render();
    }
  };

  this.route();
}
