export default {
  successRes: (res, data) => {
    res.json({
      status: true,
      info: data,
    });
  },

  errorRes: (res, data) => {
    res.json({
      status: false,
      info: data,
    });
  },
};
