import { IRouteProps } from "../library/RouteProp";
import { IEventDetailsProps } from "../library/StackScreenProps";
import HomeScreen from "../../App/screens/Home";
import ForgotPasswordScreen from "../../App/screens/auth/ForgotPassword";
import LoginScreen from "../../App/screens/auth/Login";
import RegisterScreen from "../../App/screens/auth/Register";
import ImageScreen from "../../App/screens/Image";
import RegisterEventScreen from "../../App/screens/register/RegisterEvents";
import ChecklistScreen from "../../App/screens/Checklist";
import RegisterEnvironmentScreen from "../../App/screens/register/RegisterEnvironment";
import RegisterHmsScreen from "../../App/screens/register/RegisterHms";
import RegMachinesAndEquipScreen from "../../App/screens/register/RegisterMachinesAndEquip";
import RegisterOtherScreen from "../../App/screens/register/RegisterOther";
import RegisterQualityScreen from "../../App/screens/register/RegisterQuality";
import PrevEventScreen from "../../App/screens/PreviousEvents";
import EventDetailsScreen from "../../App/screens/EventDetails";

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
    },
    {
        name: 'RegisterEvents',
        component: RegisterEventScreen
    },
    {
        name: 'Checklist',
        component: ChecklistScreen
    },
    {
        name: 'RegisterEnvironment',
        component: RegisterEnvironmentScreen
    },
    {
        name: 'RegisterHms',
        component: RegisterHmsScreen
    },
    {
        name: 'RegMachAndEquip',
        component: RegMachinesAndEquipScreen
    },
    {
        name: 'RegisterOther',
        component: RegisterOtherScreen
    },
    {
        name: 'RegisterQuality',
        component: RegisterQualityScreen
    },
    {
        name: 'PreviousEvent',
        component: PrevEventScreen
    },
    {
        name: 'EventDetails',
        component: EventDetailsScreen
    }
]

export default routes;