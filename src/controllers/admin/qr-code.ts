
import crypto from "crypto"
import QRCode from 'qrcode'
import { transactionModel } from "../../database";

export const createTransaction = async (req, res) => {
    const { transactionId, amount, appId } = req.body;

    try {
        const qrCodeImage = await generateQRCode(transactionId, amount, appId);

        // Render the QR code in an EJS file
        res.render('index', { qrCodeImage });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error generating QR code');
    }
};

const signData = (data) => {
    try {
      const sign = crypto.createSign('RSA-SHA256'); // Change to RSA-SHA256 if SHA256 is unsupported
      sign.update(data);
      sign.end();
      console.log("process.env.PRIVATE_KEY => ",process.env.PRIVATE_KEY);
      return sign.sign(process.env.PRIVATE_KEY, 'base64');
    } catch (error) {
      console.error('Error signing data:', error);
      throw new Error('Signing failed');
    }
  };

const encryptData = (data) => {
  const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'base64');
  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, Buffer.alloc(16, 0));
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const generateQRCode = async (transactionId, amount, appId) => {
  const timestamp = new Date().toISOString();
  const data = JSON.stringify({ transactionId, amount, appId, timestamp });
  const signature = signData(data);
  const qrData = JSON.stringify({ transactionId, amount, appId, timestamp, signature });
  const encryptedQRData = encryptData(qrData);
  return await QRCode.toDataURL(encryptedQRData);
};

// module.exports = { createTransaction, verifyTransaction };
