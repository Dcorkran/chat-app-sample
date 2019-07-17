const express = require('express');
const { getMessagesByChannel } = require('../db/queries');

const router = express.Router();

router.get('/:channelId', async (req, res) => {
  const messages = await getMessagesByChannel(req.params.channelId);
  res.send({ messages }).status(200);
});
module.exports = router;
