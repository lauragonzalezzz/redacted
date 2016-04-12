function redact(req, res, next){
  req.body.message.toLowerCase();
  if (req.body.message.includes('selfie') !== -1){
    req.body.message = req.body.message.replace('selfie', 'self portrait');
  }
  if (req.body.message.includes('yummers') !== -1){
    req.body.message = req.body.message.replace('yummers', 'delicious');
  }
  if (req.body.message.includes('outchea') !== -1){
    req.body.message = req.body.message.replace('outchea', 'are out here');
  }
  if (req.body.message.includes('bruh') !== -1){
    req.body.message = req.body.message.replace('bruh', 'wow');
  }
  if (req.body.message.includes('doge') !== -1){
    req.body.message = req.body.message.replace('doge', 'pug');
  }
  if (req.body.message.includes('cilantro') !== -1){
    req.body.message = req.body.message.replace('cilantro', 'soap');
  }
  if (req.body.message.includes('bae') !== -1){
    req.body.message = req.body.message.replace('bae', 'loved one');
  }
  if (req.body.message.includes('swag') !== -1){
    req.body.message = req.body.message.replace('swag', 'style');
  }
  if (req.body.message.includes('yolo') !== -1){
    req.body.message = req.body.message.replace('yolo', 'carpe diem');
  }
  next();
};

module.exports = redact;