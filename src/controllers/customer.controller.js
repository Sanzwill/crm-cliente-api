const Customer  = require("../schemas/Customer.js");

const getCustomer  = async (req, res) => {
    try{
           const {search }= req,query
           const regex  = new RegExp(search, "i");
           console.log(regex)
           const customer  = await Customer .find ({
             $or:[{name: regex}, {email:regex}, {company: regex}],
           }).limit(limit).sort({name: 'desc'});
        
       return res.status(202).json({
        ok: true,
        message: 'se ha credo en customer ',
        customer,
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const createCustomer = async (req, res) => {
    try{
        const { nombre, email, price } = req.body;

        const newCustomer =  new Customer({customer})

        const CustomerSaved =  await newCustomer.save()

       return res.status(202).json({
            ok: true,
            message: "Customer guardado",
            Customer: CustomerSaved
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error al crear"
       })
    }
};

const updateCustomer = async (req, res) => {
    try{
        const { CustomerId, customer } = req.body;


       const customerUpdated = await Customer.findByIdAndUpdate(
        id,
        {
            $set: {nombre, email, company, phone}
        },
       {_id: CustomerId}
       );

       return res.status(202).json({
            ok: true,
            message: " customer actualizado",
            customer: customerUpdated
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const deleteCustomer= async  (id) => {
    try{
        const { clientId } = id
       
       const CustomerDeleted = await Customer.deleteOne({_id:CustomerId})

       return res.status(200).json({
            ok: true,
            message: "Producto Elimindo",
            product: {_id:clientId }
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Customer eliminado con exito",
       })
    }
};

module.exports = {getCustomer , createCustomer, updateCustomer, deleteCustomer}
