import express  from "express";
import ConnectDB from "./database/connection";
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
import AssociateLead from './API/AssociateLead/index'; 
import DomainLead from './API/DomainLead/index';
import Member from './API/Member/index';
import TeamLead from './API/TeamLead/index';

app.get('/', (req,res)=>{
    res.json({message:"setup success"});
});

app.use("/member", Member);
app.use("/domainlead", DomainLead);
app.use("/associatelead", AssociateLead);
app.use("/teamlead", TeamLead);

app.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is up and running"))
    .catch((error) => {
      console.log(error);
      console.log("Server is running, but database connection failed ...");
    })
);