import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{res.json("users")});
router.get('/:userId',);
router.post('/',);
router.put('/:userId',)
router.delete('/:userId',);

export default router;