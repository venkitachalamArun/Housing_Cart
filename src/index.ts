import express, { Express } from "express";
const app:Express=express();
import { AppDataSource } from './config/data';
app.use(express.json());
import dashboardroutes from './routes/dashboardroutes';
import  cartroutes from './routes/cartroutes'


// //MongoDb connection
// connectDB();
// // Routes
app.use('/dashboard', dashboardroutes);
app.use('/carts', cartroutes);
// app.use('/payments', paymentRoutes);
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Mongo Database connection Sucess');
        // console.log('MongoDB connection properties:', AppDataSource);
    })
    .catch((error) => console.log(error))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server started runnning on the port ${PORT}`);
})