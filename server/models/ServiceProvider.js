import {Schema, model} from "mongoose"

const serviceProviderSchema = Schema ({
    

    user :{
        type : Schema.Types.ObjectId,
        ref :"User",
        required : "true"
    },

    serviceId: {
        type : Schema.Types.ObjectId,
        ref : "service",
        required : true 

    },

    ownername : {
        type : String,
        required :  true
    },

    shopname : {
        type : String,
        required : true
    },

    description : {
         type : String,


    },

    category: {
        type: String,
        required: true,
        enum: ['carpenter', 'plumber', 'electrician', 'vegetable-stall', 'barber', 'cobbler'],
    },

    
    mobile : {
        type : Number,
        required : true
        
    },

    location :{
        type  : String,
        
    },

    time :{
        type: String,
        required : true
    }

    
},

   {
    timestamps : true
   }



)


const ServiceProvider = model ("ServiceProvider", serviceProviderSchema)

export {ServiceProvider}