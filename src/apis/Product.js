const URL =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";

const options = {
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export const getProductlist = async () => {
  try {
    const response = await fetch(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    alert(e);
  }
};
