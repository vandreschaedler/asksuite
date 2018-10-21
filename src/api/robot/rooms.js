import express from 'express';
import { validationResult } from 'express-validator/check';
import validateRequest from '../../tools/Validations/validate-rooms';
import httpResponse from '../../tools/Http/response';
import { crawling } from '../crawler/crawler';


const router = express.Router();


const fetch = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return httpResponse.errorRes(res, errors.array()[0], 422);
  }

  return crawling(req.body)
    .then((info) => {
      httpResponse.successRes(res, info);
    })
    .catch((err) => {
      httpResponse.errorRes(res, err.msg || err, err.code || 500);
    });
};

router.post('/buscar', validateRequest, fetch);

export default (app) => {
  app.use('/v1/api', router);
};
