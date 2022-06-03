const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const CreateSeller = async (req, res) => {
  // console.log(req.body);
  const { name, email, gst_number, phone_number } = req.body;
  try {
    const result = await prisma.sellers.create({
      data: { name, email, gst_number, phone_number }
    });

    res.status(200).json({ msg: "successfully added Sellers", result });
  } catch (error) {
    res.status(400).json({ msg: "Bad request", error });
  }
};



const getSeller = async(req,res)=>{
  try {
      const resp = await prisma.sellers.findMany({})
      res.status(200).json({smg: "succesfull", data:resp})
  } catch (error) {
    res.status(400).json({ msg: "Bad request", error });
  }
}


const updateSeller = async (req, res) => {
  const {id} = req.params
  console.log(id)
  console.log(req.body)
  try {
    const ress = await prisma.sellers.update({
      where: {
        id: parseInt(id)
      },
      data:req.body
    });
    res.status(200).json({ smg: "succesfull", data: ress });
    
  } catch (error) {
    res.status(400).json({ msg: "Bad request", error });
    console.log(error)
    
  }

  // where: {
  //   email: 'viola@prisma.io',
  // },
  // data: {
  //   name: 'Viola the Magnificent',
  // }
  
  
};




/////// For deleting a product //////////
const deleteSeller = async (req, res) => {
  try {
    const ress = await prisma.sellers.delete({
      where: req.body
    });
    res.status(200).json({ smg: "succesfull", data: ress });
    
  } catch (error) {
    res.status(400).json({ msg: "Bad request", error });
    console.log(error)
    
  }
  
  
};

module.exports = {
  CreateSeller, getSeller, updateSeller, deleteSeller
};
