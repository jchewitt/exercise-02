const saleData = require('./mock.json');

const getValues = (id, year) => {
  const model = saleData[id];
  if (!model) {
    throw Error(`id number doesn't exist (${id})`);
  }
  const {
    schedule: {
      years: {
        [year]: {
          marketRatio = 0,
          auctionRatio = 0
        } = {},
        [year]: yearExists = null
      }
    },
    saleDetails: {
      cost
    } = {cost: 0},
    classification = {}
  } = model;
  if (!yearExists) {
    throw Error(`year doesn't exist on id ${id} (${year})`);
  }

  const marketValue = marketRatio * cost;
  const auctionValue = auctionRatio * cost;

  return {
    classification,
    marketValue,
    auctionValue
  };
};

module.exports = {
  getValues
};