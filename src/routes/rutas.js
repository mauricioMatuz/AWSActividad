const { Router } = require("express");
const router = Router();
//rutas :D
router.get("/", (req, res) => res.json({ "TITULO": "HOLA XD" }));

module.exports = router;