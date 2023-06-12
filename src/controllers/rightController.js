const Right = require('../models/rightModel')

const create= async(req,res)=>{
    const right = await  Right.create({
          staff_id:req.body.staff_id,
          right:req.body.right
      });
      const rightData = await right.save()

      return res.send(rightData)
}
const staffByRight =  async(req,res)=>{
   const rightData =await Right.find({ _id:req.body.right_id }).populate({path:'staff_id'
     //,
    //  match: { email: "amitcdac98@gmail.com" },
    ,   select: ["name","email" ],
      // options:{
      //   sort:{name : 1} ,  //1 for ascending order and -1 for decending order
      //   limit:2
      // }
  })
  //  const emails = rightData.map((data) => data.email);
  //   return res.send(emails);
   return res.send(rightData)
 }
module.exports = {
   create,staffByRight
    }