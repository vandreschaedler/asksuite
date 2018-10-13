export default {
  normalizeText: text => text.replace(/(\r\n\t|\n|\r\t)/gm, '')
    .split(/[\s,\t,\r,\n]+/)
    .filter(x => x)
    .join(' '),
  formatRequestDate: date => date.replace(/\//g, ''),
};
