require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

const {authenticate } = require("./middleware/auth")

const { login, signup, getUser} = require("./controllers/user.controler");

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

app.post("/seller", authenticate, CreateSeller);
app.get("/seller", getSeller);
app.patch("/seller/:id", updateSeller);
app.delete("/seller", deleteSeller);

app.post("/seller/:sellerId/product", CreateProduct);
app.get("/product", getProduct);
app.patch("/product/:id", updateProduct);
app.delete("/product", deleteProduct);

app.post("/auth/signup", signup);
app.post("/auth/login", login);
app.get("/user",getUser)

app.listen(PORT, () => {
  console.log(`yes it is listing ${PORT}`);
});
