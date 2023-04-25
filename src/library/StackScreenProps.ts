import {ParamListBase, RouteProp} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventType } from '../types/EventType';


  export interface IStackScreenProps {
    nameProp: string;
    navigation: NativeStackNavigationProp<any>;
    route: RouteProp<ParamListBase, any> & {
        params: {
            event?: EventType | any
        }
    };
}

export interface IEventDetailsProps extends IStackScreenProps {
    event: EventType;
  }