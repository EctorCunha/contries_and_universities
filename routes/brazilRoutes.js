const router = require("express").Router();
const api = require("../api.js");
const Country = require("../models/Country");

// Rota GET BRAZIL
router.get("/", async (req, res) => {
  const dados = await api
    .get("search?country=brazil")
    .then((response) => response.data);
  res.status(200).json({
    universidades: dados.map((university) => {
      return university.name;
    }),
  });
});

// Adicionando universidades
router.post("/", async (req, res) => {
  const { country, university } = req.body;

  // Requisição a API externa
  const dados = await api
    .get("search?country=brazil")
    .then((response) => response.data);

   const resultado = dados.map((university) => {
      return university.name;
  });


  const region = { country, university, resultado };

  try {
    await Country.create(region);
    await Country.insertMany({resultado});
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar universidade" });
  }
});


module.exports = router;
