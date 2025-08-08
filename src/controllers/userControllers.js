import { sequelize } from "../config/tasks_users_db.js";
import { User } from "../modules/userModules.js";
import { Task } from "../modules/taskModules.js";

export const createUser = async (req,res) =>{

    try{
        const {name,email,password}= req.body

        //name
        if (name === null && name === "" && name === undefined)return res.status(400).json(
            {Message:"El NOMBRE no puede contener parametros Nulos,Vacíos o Indefinidos"}
        );

       const nameLargo = (name)=>{
        if (User.name.length>100)
            name = nameLargo
         console.log("El nombre es muy largo")
         return res.status(400).json({message:"EL nombre no puede contener mas de 100 caracteres"});
       }

       //



       //


       //email
       if (email === null && email === "" && email === undefined)return res.status(400).json(
            {Message:"El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos"}
        ); 

         const emailExiste = await email => {

        }



    }
    }












