const axios = require("axios");
const fetch = require("isomorphic-fetch");
const cheerio = require("cheerio");

const symbols = ["AAPL", "TSLA"];

async function app() {
  const description = await getDescription("TSLA");
  console.log(description);
}

async function getDescription(symbol) {
  try {
    // const response = await axios({
    //   method: "GET",
    //   url: `http://ih.advfn.com/stock-market/NASDAQ/TSLA/stock-price`,
    // });
    const response = await axios.get("https://pxd-fed-blog.web.app/");

    // const response = await fetch(
    //   `http://ih.advfn.com/stock-market/NASDAQ/${symbol}/stock-price`
    // );
    // const text = await response.text();
    // return $("#content > .TableElement:last-child").text().trim();
    // const $ = cheerio.load(text);
    const $ = cheerio.load(response.data);
    return $(".post-right").text().trim();
  } catch (error) {
    console.log("error", error);
  }
}
app();
