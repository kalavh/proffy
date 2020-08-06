import express from 'express'

const routes = express.Router()

routes.get("/", (req,res) => {
    return res.json({Hey: "Brother"});
} )


export default routes; 