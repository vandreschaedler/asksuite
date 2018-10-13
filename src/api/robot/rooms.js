import express from 'express';
import { validationResult } from 'express-validator/check';
import validateRequest from '../../util/Validations/validate-rooms';
import httpResponse from '../../util/Http/response';
import { crawling, scraping } from '../crawler/crawler';


const router = express.Router();


const fetch = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return httpResponse.errorRes(res, errors.array()[0]);
  }


  return crawling(req.body)
    .then((info) => {
      httpResponse.successRes(res, info);
    })
    .catch(err => httpResponse.errorRes(res, err));
};


const scrap = (req, res) => scraping()
  .then((info) => {
    httpResponse.successRes(res, info);
  })
  .catch(err => httpResponse.errorRes(res, err));


router.post('/buscar', validateRequest, fetch);
router.get('/crawler/scraping/file', scrap);

export default (app) => {
  app.use('/v1/api', router);
};
