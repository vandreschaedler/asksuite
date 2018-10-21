import Nightmare from 'nightmare';
import cheerio from 'cheerio';
import { normalizeText, formatRequestDate } from '../../tools/useful';
import log from '../../config/log';

const IMG_ROOT_URL = 'https://myreservations.omnibees.com';


export const scraping = (html) => {
  log.info('Scraping started...');
  const rooms = [];

  const scraper = cheerio.load(html);
  scraper('.maintable').find('tr').find('.roomExcerpt').each((i, elem) => {
    const name = normalizeText(scraper(elem).find('h5').text());
    const singlePrice = scraper(elem).find('.bestPriceTextColor h6').text();
    const description = normalizeText(scraper(elem).find('.description').text());
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
  return new Promise((response, reject) => {
    log.success('Scraping finished!');
    if (!rooms.length) {
      log.error('There is no data to show..');
      const error = {
        msg: 'Não foram encontrados quartos no período informado!',
        code: 404,
      };
      reject(error);
    }

    response(rooms);
  });
};


export const crawling = (dates) => {
  const nightmare = Nightmare({ show: true });
  const url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=2ab41776-0168-451d-97e8-376ebe4a81f4#/&diff=false&CheckIn=${formatRequestDate(dates.checkin)}&CheckOut=${formatRequestDate(dates.checkout)}&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-`;

  function getHtml(crawler) {
    log.info('Starting Crawling...');
    return crawler
      .goto(url)
      .wait(10000)
      .evaluate(() => toggleSearch())
      .wait(10000)
      .evaluate(() => document.querySelector('body').innerHTML)
      .then(scraping)
      .catch((err) => {
        if (err.code === 404) { throw err; }
        log.warn('Error on fetch data - trying again..');
        return getHtml(crawler);
      });
  }

  log.success('Crawling finished!');
  return getHtml(nightmare);
};
