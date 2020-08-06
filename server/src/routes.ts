import express from 'express'
import db from './database/connection';

const routes = express.Router()

interface scheduleItem{
    week_day: number;
    from: string;
    to: string;
}

routes.post("/classes", async (req,res) => {

    const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule} = req.body
   
    
    const insertedUsersIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    }); 

    const user_id = insertedUsersIds[0]

   const insertedClassesIds = await db('classes').insert({
        subject,
        cost,
        user_id,
        
    })

    const class_id = insertedClassesIds[0]

    const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
        return{

        }
    })

    return res.send("Ok"); 
} )


export default routes; 