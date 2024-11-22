import express  from  'express';
const morgan = require('morgan');
const connectDB = require('./config/dbConn');
const { default: mongoose } = require("mongoose");
const app = express();
//const { sendEmail } = require('./utils/sendMail');
const cors = require("cors");
const corsOption = require("./config/corsOption");


const port = 3000;
connectDB()
app.use(morgan(':method :url :status :response-time ms'));
app.use(cors(corsOption));
// Middleware pour traiter les requêtes JSON
app.use(express.json());
app.use("/api", require("./routes/paymentRoute"));

// Route de base
app.get('/', (req: any, res: any) => {
  res.send('Bienvenue sur votre serveur Express.js en TypeScript avec require!');
});


 mongoose.connection.once("open", () => {
  console.log("connect to mongoDB");
  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
  });
});
