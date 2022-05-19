const { Router } = require("express");
const router = Router();

module.exports = router;

const book = require("../sample.json")
console.log(book)

router.get("/", (req, res) => {
  res.json(book);
});

router.post("/", (req, res) => {
      const {title, author,price} = req.body
      if (title & author & price) {
            const id = book.length+1
            const newbook = {id,...req.body}
            book.push(newbook)
            res.json(book)
      }else{
            res.send("NO SE SALVO NAA")
      }
})
