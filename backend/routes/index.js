const express = require('express');
const { getMessagesByChannel } = require('../db/queries');

const router = express.Router();

router.get('/messages', async (req, res) => {
  const messages = await getMessagesByChannel(req.query.channel);
  res.send({ messages }).status(200);
});
module.exports = router;
