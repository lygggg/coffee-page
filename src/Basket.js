export default function Basket({ $target }) {
  const $page = document.createElement("div");
  $page.className = "Basket";

  $page.innerHTML = "<h1>장바구니</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
}
