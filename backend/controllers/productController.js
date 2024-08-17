const ProductModel =require('../models/productModel');

//Get Products API -/api/v1/products

exports.getProducts = async (req,res,next)=>{

    const query = req.query.keyword?{name : {
        $regex:req.query.keyword,
        $option:'i'
    }}:{}
   
    
    const products = await ProductModel.find(query);
    res.json({
        success : true,
        products
    })
}

//Get SingleProduct API -/api/v1/product/:id


exports.getSingleProduct = async (req,res,next)=>{
try{
    const product = await ProductModel.findById(req.params.id)
    res.json({
        success : true,
        product
    })
}
catch(error){
    res.status(404).json({
        success:false,
        message:'Unable to get products with that ID'
    })
}
}
    

    