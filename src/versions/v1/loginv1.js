import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import { login } from '../../DTO/login.js';

dotenv.config("../src/");

const appToken = Router();
const appVerify = Router();

appToken.use("/:collection", async(req,res)=>{
   try {
        let inst = plainToClass((req.params.collection === "login") ? login : error, {}, {ignoreDecorators: true});
        console.log({"instacion de la clase": inst});
        
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        //console.log({"Ese jwtconstructor": jwtconstructor}); 
        
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("5m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
      
        req.data=jwt
        console.log(req.data);
        res.status(201).send({message: jwt});
   } catch (error) {
    res.status(404).send({message: "Error al generar el token"})
   }
})

appVerify.use("/", async(req,res, next)=>{
    const {authorization} = req.headers;
    //console.log({"autorization": authorization});
    if (!authorization) return res.status(400).send({status: 401, token: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        console.log({"jwtData" : jwtData});
        next();
    } catch (error) {
        res.status(404).send({status: 404, token: "Token solicitado no valido"});
    }
})

export {
    appToken,
    appVerify
}