const QRCode = require('qrcode');

const DEFAULT_URL = 'https://capitalisk.com/wallet/ldpos/#/transaction/create';

class QRCodeGenerator {
  /**
   * Options
   * @param {Object} opts
   * @param {string} opts.url Url to generate the QR Code
   */
  constructor(opts = {}) {
    this.url = opts.url || DEFAULT_URL;
  }

  async generateSVG(element, data) {
    if (typeof data === 'object' && !Array.isArray(data)) {
      data = this.queryBuilder(data);
    }

    try {
      await QRCode.toCanvas(element, `${this.url}/${data}`);
    } catch (err) {
      return err;
    }
  }

  async generateBase64Image(
    data,
    opts = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.3,
      margin: 1,
      color: {
        dark: '#FFFFFF',
        light: '#161A22',
      },
    },
  ) {
    if (typeof data === 'object' && !Array.isArray(data)) {
      data = this.queryBuilder(data);
    }

    try {
      return await QRCode.toDataURL(`${this.url}/${data}`, opts);
    } catch (err) {
      return err;
    }
  }

  queryBuilder(args) {
    let query = '?';

    Object.entries(args).forEach(([key, value], i) => {
      if (!value && value !== 0) return;
      if (i !== 0) query += '&';

      query += `${key}=${value}`;
    });

    return query;
  }
}

module.exports = QRCodeGenerator;
