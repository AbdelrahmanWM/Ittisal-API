import { Router } from "express";
import {user_list,user_detail, user_create, user_update, user_delete} from '../controllers/usersController';
const router = Router();

router.get('/',user_list);
router.get('/:userId',user_detail);
router.post('/',user_create);
router.put('/:userId',user_update);
router.delete('/:userId',user_delete);

export default router;