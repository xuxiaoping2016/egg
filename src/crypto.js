const crypto = require('crypto');

crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} 位的随机数据: ${buf.toString('hex')}`);
});