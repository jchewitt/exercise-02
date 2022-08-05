const util = require('./util');
const calc = require('./calc');

const logData = (id, year) => {
  const dollarUSLocale = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  console.log(`\n- Searching id ${id} with year ${year}...`);

  try {
    const result = calc.getValues(id, year);
    if (!result) {
      throw Error('ERR - Results not found');
    }
    console.log(`
      ${result.classification.make} ${result.classification.model}
      
      Market Value: ${dollarUSLocale.format(result.marketValue)}
      Auction Value: ${dollarUSLocale.format(result.auctionValue)}
    `);
  } catch (e) {
    console.info(`ERR - ${e.message}`);
  }
  console.log(`================================`);
};

logData(67352, 2007);
logData(87964, 2011);



