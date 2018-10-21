import { body } from 'express-validator/check';
import { validateInterval } from '../useful';

const queries = {
  initialDate: body('checkin')
    .not().isEmpty().withMessage('Data do checkin deve ser informada!')
    .custom(validateInterval),
  finalDate: body('checkout')
    .not().isEmpty().withMessage('Data do checkout deve ser informada!')
    .custom(validateInterval),
};

export default [
  queries.initialDate,
  queries.finalDate,
];
