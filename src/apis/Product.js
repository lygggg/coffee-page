const URL =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";

export const getProductlist = () => {
  const { data } = fetch(URL, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
  return data;
};
