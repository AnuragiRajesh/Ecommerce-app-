const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

////// For Creating a Product ///////////
const CreateProduct = async (req, res) => {
  const { sellerId } = req.params;
  try {
    const result = await prisma.products.create({
      data: { ...req.body, seller_id: parseInt(sellerId) },
    });

    res.status(200).json({
      msg: "successfully added Product for seller" + sellerId,
      result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: "Bad request", error });
  }
};

/////////FOr getting the data of a Product ///////////
const getProduct = async (req, res) => {
  try {
    const resp = await prisma.products.findMany({});
    res.status(200).json({ smg: "succesfull", data: resp });
  } catch (error) {
    res.status(400).json({ msg: "Bad request", error });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.bodycleasd);
  try {
    const ress = await prisma.products.update({
      where: {
        id: parseInt(id),
      },
      data: req.body,
    });
    res.status(200).json({ smg: "succesfull", data: ress });
  } catch (error) {
    res.status(400).json({ msg: "Bad request", error });
    console.log(error);
  }

  // where: {
  //   email: 'viola@prisma.io',
  // },
  // data: {
  //   name: 'Viola the Magnificent',
  // }
};

/////// For deleting a product //////////
const deleteProduct = async (req, res) => {
  try {
    const ress = await prisma.products.delete({
      where: req.body,
    });
    res.status(200).json({ smg: "succesfull", data: ress });
  } catch (error) {
    res.status(400).json({ msg: "Bad request", error });
    console.log(error);
  }
};

module.exports = {
  CreateProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
