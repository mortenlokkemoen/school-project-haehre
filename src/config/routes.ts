import { IRouteProps } from "../library/RouteProp";
import HomeScreen from "../../App/screens/Home";
import ForgotPasswordScreen from "../../App/screens/auth/ForgotPassword";
import LoginScreen from "../../App/screens/auth/Login";
import RegisterScreen from "../../App/screens/auth/Register";
import ImageScreen from "../../App/screens/Image";

const routes: IRouteProps[] = [
    {
        name: 'HomeScreen',
        component: HomeScreen
    },
    {
        name:'Login',
        component: LoginScreen
    },
    {
        name: 'ForgotPassword',
        component: ForgotPasswordScreen
    },
    {
        name: 'Register',
        component: RegisterScreen
    },
    {
        name: 'ImageScreen',
        component: ImageScreen
    }
]

export default routes;