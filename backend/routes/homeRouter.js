const router = require("express").Router();



router.get("/", async (req, res) => {
  const latitude = (req.data);
  console.log(latitude);
  
});

module.exports = router;