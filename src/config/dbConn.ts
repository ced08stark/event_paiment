const mongoose = require('mongoose')


const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://cedricngangue08:ofTJV4og5aQVCnnB@paymentcluster.85bra.mongodb.net/?retryWrites=true&w=majority&appName=paymentcluster", {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
    }
    catch(err){
        console.error(err)
    }
}


module.exports = connectDB