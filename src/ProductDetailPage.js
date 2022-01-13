export default function ProductDetailPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductDetailPage";

  $page.innerHTML = "<h1>상품 상세 페이지</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
}
