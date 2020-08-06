import {Request , Response, response} from 'express'
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';
interface scheduleItem{
    week_day: number;
    from: string;
    to: string;
}


export default class ClassesController{

    async index(req: Request, res : Response){
        const filters = req.query;

        if(!filters.week_day || !filters.subject || !filters.time){
            return res.status(400).json( { error:" missing filters to search classes"})
        }

        const timeInMinutes = convertHourToMinutes(filters.time as string);

            console.log(timeInMinutes)
            return response.send();
        
    }


    async create(req: Request, res:Response) {

        const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule} = req.body
       
        const trx = await db.transaction();
    
        try{ 
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
             }); 
        
            const user_id = insertedUsersIds[0]
        
           const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
                
            })
        
            const class_id = insertedClassesIds[0]
        
            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                return{
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to:convertHourToMinutes(scheduleItem.to),
                };
            })
        
            await trx('class_schedule').insert(classSchedule)
        
            await trx.commit();
            return res.status(201).send("Ok"); 
        } catch (err) {
            await trx.rollback();
            return res.status(400).json({
                error: 'Unexpected erro while create new class'
            })
    
        }
    }
}