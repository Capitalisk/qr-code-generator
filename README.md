# QR Code generator

This repo is to generate a url with pre-filled transaction details for anyone to scan and send the provided transaction. Check out `test.js` for relevant use-cases.

Usage:

```js

const generator = new QRCodeGenerator({ url: 'http://example.com/transactions/create' });

generator.generateBase64Image('sampledata')
```
