import {Request, Response, Router} from "express";
import Notes from "../models/note";
const router:Router = Router();


// just a testing endpoit
router.get('/', (req: Request, res: Response) => {
    res.json({welcome:"to my login api"})
})

router.post('/new-note', async (req: Request, res:Response) => {
    const data = req.body
    console.log(data)
    try{
        const note = await Notes.create(data)
        res.json({
            status: "Success",
            response: note
        })
    }catch(e){
        res.json({
            status: "Fail",
            response: e
        })        
    }
})

router.get('/list', async (req: Request, res:Response) => {
    let data = {}
    try{
        data = await Notes.find({}).exec()
        res.json({
            status: "Success",
            response:data
        })
    }catch(e){
        data = {error: e}
        console.log(e)
        res.json({
            status: "Fail",
            response:e
        })
    }
})

export default router