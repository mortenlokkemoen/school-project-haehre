import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EmployeeType } from "../types/EmployeeType";

export interface IStackScreenProps {
  nameProp: string;
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<ParamListBase, any> & {
    params: {
      event?: EmployeeType | any;
    };
  };
}

export interface IEventDetailsProps extends IStackScreenProps {
  event: EmployeeType;
}
