import Nightmare from 'nightmare';
import cheerio from 'cheerio';
import logs from '../../config/log';
import utils from '../../util/utils';

const IMG_ROOT_URL = 'https://myreservations.omnibees.com';


export const scraping = (html) => {
  const rooms = [];

  const scraper = cheerio.load(html);
  scraper('.maintable').find('tr').find('.roomExcerpt').each((i, elem) => {
    const name = utils.normalizeText(scraper(elem).find('h5').text());
    const singlePrice = scraper(elem).find('.bestPriceTextColor h6').text();
    const description = utils.normalizeText(scraper(elem).find('.description').text());
    const images = [];
    scraper(elem).find('.thumb').find('img').each((index, image) => {
      images.push(`${IMG_ROOT_URL}${scraper(image).attr('src')}`);
    });
    rooms.push({
      name,
      singlePrice,
      description,
      images,
    });
  });
  return new Promise(response => response(rooms));
};


export const crawling = (dates) => {
  const nightmare = Nightmare({ show: false });
  const url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=2ab41776-0168-451d-97e8-376ebe4a81f4#/&diff=false&CheckIn=${utils.formatRequestDate(dates.checkin)}&CheckOut=${utils.formatRequestDate(dates.checkout)}&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-`;

  logs.success('starting crawling');

  function getHtml(crawler) {
    return crawler
      .goto(url)
      .wait(10000)
      .evaluate(() => toggleSearch())
      .wait(10000)
      .evaluate(() => document.querySelector('body').innerHTML)
      .then(scraping)
      .catch((err) => {
        console.log(err);
        return getHtml(crawler);
      });
  }


  return getHtml(nightmare);
};
