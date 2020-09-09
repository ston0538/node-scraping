const puppeteer = require("puppeteer");

async function app() {
  const description = await getDescription("TSLA");
  console.log(description);
}

async function getDescription(symbol) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.goto("http://ih.advfn.com/stock-market/NASDAQ/TSLA/stock-price");
    await page.goto("https://www.airbnb.co.kr/d/howairbnbworks");
    const text = await page.evaluate(() => {
      return document.querySelector("._4gelgl").innerText;
    });
    await browser.close();
    return text;
  } catch (error) {
    console.log("error", error);
  }
}
app();
