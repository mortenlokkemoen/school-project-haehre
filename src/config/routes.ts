import { IRouteProps } from "../library/RouteProp";
import HomeScreen from "../../App/screens/Home";
import ForgotPasswordScreen from "../../App/screens/auth/ForgotPassword";
import LoginScreen from "../../App/screens/auth/Login";
import RegisterScreen from "../../App/screens/auth/Register";
import ImageScreen from "../../App/screens/Image";
import EventScreen from "../../App/screens/Events";
import ChecklistScreen from "../../App/screens/Checklist";

const routes: IRouteProps[] = [
    {
        name: 'HomeScreen',
        component: HomeScreen
    },/*
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
    */
    {
        name: 'ImageScreen',
        component: ImageScreen
    },
    {
        name: 'Events',
        component: EventScreen
    },
    {
        name: 'Checklist',
        component: ChecklistScreen
    }
]

export default routes;