import {Router} from 'express'
import { authMiddleware } from '../Middleware/Auth'
import { registerController } from '../Controllers/RegisterController'
import { signinController } from '../Controllers/signinController'


const routes = Router()

routes.post("/register", registerController)
routes.post("/signin", signinController)





export {routes}