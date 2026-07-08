import { Router } from 'express'
import userController from '../controllers/UserController'
const router = new Router();
import loginRequired from '../middlewares/loginRequired'



//router.get('/',  userController.index)
//router.get('/:id', userController.show)


router.post('/', loginRequired,  userController.store)
router.put('/:id', loginRequired, userController.update)
router.delete('/:id', loginRequired, userController.delete)

export default router;
