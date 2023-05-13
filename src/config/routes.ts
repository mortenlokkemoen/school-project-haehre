import { IRouteProps } from "../library/RouteProp";
import HomeScreen from "../../App/screens/Home";
import LoginScreen from "../../App/screens/auth/Login";
import ImageScreen from "../../App/screens/Image";
import RegisterEventScreen from "../../App/screens/register/RegisterEvents";
import ChecklistScreen from "../../App/screens/Checklist";
import RegisterScreen from "../../App/screens/register/Register";
import PrevEventScreen from "../../App/screens/PreviousEvents";
import EventDetailsScreen from "../../App/screens/EventDetails";

const routes: IRouteProps[] = [
  {
    name: "Login",
    component: LoginScreen,
  },
  {
    name: "Hjem",
    component: HomeScreen,
  },

  {
    name: "ImageScreen",
    component: ImageScreen,
  },
  {
    name: "Registrer Hendelse",
    component: RegisterEventScreen,
  },
  {
    name: "Checklist",
    component: ChecklistScreen,
  },
  {
    name: "Register",
    component: RegisterScreen,
  },
  {
    name: "Tidlige Hendelser",
    component: PrevEventScreen,
  },
  {
    name: "EventDetails",
    component: EventDetailsScreen,
  },
];

export default routes;
