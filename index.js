const express = require("express");
const app = express();
const port = 3000;
const {
  CreateSeller,
  getSeller,
  deleteSeller,
  updateSeller,
} = require("./controllers/seller.controller");
const {
  CreateProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers/product.controller");

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())
app.use(express.json());

// app.get('/status',(req,res)=>{
//     res.send("<h1>yes running</h1>")
// })

app.post("/seller", CreateSeller);
app.get("/seller", getSeller);
app.patch("/seller/:id", updateSeller);
app.delete("/seller", deleteSeller);

app.post("/seller/:sellerId/product", CreateProduct);
app.get("/product", getProduct);
app.patch("/product/:id", updateProduct);
app.delete("/product", deleteProduct);

app.listen(port, () => {
  console.log("yes it is listing");
});
