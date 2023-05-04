import { IStackScreenProps } from "./StackScreenProps";

export interface IRouteProps {
  params?: any;
  component: React.FunctionComponent<IStackScreenProps>;
  name: string;
  drawerLabel?: string;
  //   hideFromDrawer?: boolean;
}
