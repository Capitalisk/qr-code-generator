const QRCodeGenerator = require('./index');

const generator = new QRCodeGenerator();

(async () => {
  const preparedTxn = {
    type: 'transfer',
    recipientAddress: 'clskefecd5cf611f1e3939b3f2754ad7d5b8ecd620a4',
    amount: '1000000000',
    fee: '10000000',
    timestamp: 100000,
    message: `Test QR Generator`,
  }

  // const code = await generator.generateBase64Image(preparedTxn);

  // console.log(code);

  const code = await generator.generateSVG(preparedTxn)

  console.log(code)
})();
