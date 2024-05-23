import { Router } from "express";
import {user_list,user_detail} from '../controllers/usersController';
const router = Router();

router.get('/',user_list);
router.get('/:userId',user_detail);
router.post('/',);
router.put('/:userId',)
router.delete('/:userId',);

export default router;