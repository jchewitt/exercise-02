const saleData = require('./mock.json');

const getValues = (id, year) => {
  const model = saleData[id];
  if (!model) {
    throw Error(`id number doesn't exist (${id})`);
  }
  const {
    schedule: {
      years: {
        [year]: yearData
      }
    },
    saleDetails: {
      cost
    } = {cost: 0},
    classification = {}
  } = model;
  if (!yearData) {
    throw Error(`year doesn't exist on id ${id} (${year})`);
  }

  const marketValue = yearData.marketRatio * cost;
  const auctionValue = yearData.auctionRatio * cost;

  return {
    classification,
    marketValue,
    auctionValue
  };
};

module.exports = {
  getValues
};
