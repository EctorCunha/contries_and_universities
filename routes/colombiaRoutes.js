const router = require('express').Router();
const api = require('../api.js');

router.get("/", async (req, res) => {
  const dados = await api
    .get("search?country=colombia")
    .then((response) => response.data);
  res.status(200).json({
    universidades: dados.map((university) => {
      return university.name;
    }),
  });
});

  module.exports = router;
  


