import { body } from 'express-validator/check';

const queries = {
  initialDate: body('checkin')
    .not().isEmpty().withMessage('Data do check-in deve ser informada!'),
  finalDate: body('checkout')
    .not().isEmpty().withMessage('Data do check-out deve ser informada!'),
};

export default [
  queries.initialDate,
  queries.finalDate,
];
