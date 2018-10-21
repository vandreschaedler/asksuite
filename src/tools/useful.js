import isValid from 'date-fns/is_valid';


export const normalizeText = text => text.replace(/(\r\n\t|\n|\r\t)/gm, '')
  .split(/[\s,\t,\r,\n]+/)
  .filter(x => x)
  .join(' ');
export const formatRequestDate = date => date.replace(/\//g, '');
export const reverseDate = date => new Date(date.split('/').reverse().join('/'));
export const validateInterval = (value, paramKey) => {
  const reversedDate = reverseDate(value);
  const reverseCheckout = reverseDate(paramKey.req.body.checkout);
  const dateIsValid = isValid(reversedDate);
  const now = new Date();
  now.setDate(now.getDate() - 1);

  const invalid = `Data do ${paramKey.path} inválida`;
  const minorThanNow = `Data de ${paramKey.path} deve ser igual ou maior que data de hoje!`;
  const initialMinorThanFinal = 'Data de checkin deve ser maior que a data de checkout!';
  const areEquals = 'Data de checkout deve ser maior que a data de checkin';
  return new Promise((resolve, reject) => {
    if (paramKey.req.body.checkin === paramKey.req.body.checkout) reject(areEquals);
    if (!dateIsValid) reject(invalid);
    if (reversedDate < now) reject(minorThanNow);
    if (paramKey.path === 'checkin' && reversedDate > reverseCheckout) reject(initialMinorThanFinal);

    resolve();
  });
};
