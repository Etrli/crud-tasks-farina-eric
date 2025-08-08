import { User } from "../modules/userModules.js";


export const createUser = async (req,res) =>{


    try{
        const {name,email,password}= req.body

    //name
        if (name === null && name === "" && name === undefined)return res.status(400).json(
            {Message:"El NOMBRE no puede contener parametros Nulos,Vacíos o Indefinidos"}
        );

       const nameLargo = (name)=>{
        if (name.length>100)
            name = nameLargo
         console.log("El nombre es muy largo")
         return res.status(400).json({message:"EL nombre no puede contener mas de 100 caracteres"})};
    //


    //email
       if (email === null && email === "" && email === undefined)
        return res.status(400).json(
            {Message:"El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos"}
        ); 
        
        const emailExiste = await User.findOne({where: {email: req.params.email}})

        if (emailExiste) 
         return res.status(400).json(
            {Message:"Este correo ya está en uso"});


            
        const emailLargo = (email)=>{
        if (email.length>100)
            email = emailLargo
         console.log("El email es muy largo")
         return res.status(400).json({message:"EL Email no puede contener mas de 100 caracteres"})};
    //



    //password
    
       if (password === null && password === "" && password === undefined)
        return res.status(400).json(
            {Message:"El PASSWORD no puede contener parametros Nulos,Vacíos o Indefinidos"}
        ); 

        const passwordlLargo = (password)=>{
        if (password.length>100)
            password = passwordlLargo
         console.log("El password es muy largo")
         return res.status(400).json({message:"EL Password no puede contener mas de 100 caracteres"})};
    //

    const user = User.create({name,email,password})
    if (user) return res.status(200).json({Message:"Se ha creado el Usuario",user});


    










}catch (error) {Message:"Error por parte del servidor al crear el User"}
};












