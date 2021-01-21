const puppeteer = require('puppeteer');

let page;

(async function main() {
  const browser = await puppeteer.launch();
  page = await browser.newPage();

  await html`<button>Button</button>`;
  console.log(await page.content());

  let button = await page.waitForSelector('aria/Button[role="button"]');
  console.log('Found:', await button.evaluate((node) => node.textContent));

  await page.reload();
  console.log('--- Reloaded ---');

  await html`<button>Button</button>`;
  console.log(await page.content());

  button = await page.waitForSelector('aria/Button[role="button"]');
  console.log('Found:', await button.evaluate((node) => node.textContent));

  await browser.close();
})();

async function html(strings) {
  return await page.evaluate((string) => {
    document.body.innerHTML = string;
  }, strings.join(''));
}
