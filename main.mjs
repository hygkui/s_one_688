import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://s.1688.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  const url2 = 'https://s.1688.com/youyuan/index.htm?tab=imageSearch&imageAddress=&imageId=1241208079782673480&spm=a26352.b28411319.searchbox.input&imageIdList=1241208079782673480&beginPage=1&tags=3609025&sortField=price&sortType=asc#sm-filtbar'


  await page.goto(url2)
  // Type into search box
  // await page.type('.devsite-search-field', 'automate beyond recorder');

  const title = await page.title();

  console.log('title :>> ', title);

  // screenshot
  await page.screenshot({path: './screenshots/' + Date.now() + '.png'});

  // get div with id xxx
  const divs = await page.$$('.space-offer-card-box')
  const items = divs.slice(0, 5);
  // get all children of div

  items.map(async item => {
    const _title = await item.$eval('.mojar-element-title', node => node.innerText);
    console.log('\n\n_title :>> ', _title);
  })

  // const children = await div.children.slice(0, 5)
  // // map children

  // for (let i = 0; i < children.length; i++) {
  //   const child = children[i];
  //   const title = await child.$eval('.sm-offer-title', node => node.innerText);
  //   console.log('\n\ntitle :>> ', title);
  // }



  // Wait and click on first result
  // const searchResultSelector = '.devsite-result-item-link';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();
