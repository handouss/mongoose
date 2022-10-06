const express =require('express');
const app=express();
app.use(express.json());
require('./config/connectDB');

const userRoutes= require('./routes/userRoutes')
app.use('/api/v1/users/',userRoutes);

const postRoutes= require('./routes/postRoutes')
app.use('/api/v1/posts/',postRoutes);


app.listen ( 5000 , ( err )=>
  err ? console.log ( err ) : console.log ( ' server is running on port 5000 ' )
) ;