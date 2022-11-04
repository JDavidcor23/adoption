import { SvgHome } from "./SvgHome";
import { SvgInbox } from "./SvgInbox";
import { ROUTES } from "../../constants";
import { SvgProfile } from "./SvgProfile";
import { SvgFavorites } from "./SvgFavorites";

export const SvgNavbar: React.FC<{
  color: boolean;
  class_name: string;
  route: string;
}> = ({ color, route, class_name }) => {
  switch (route) {
    case ROUTES.HOME:
      return <SvgHome color={color} class_name={class_name} />;
    case ROUTES.INBOX:
      return <SvgInbox color={color} class_name={class_name} />;
    case ROUTES.PROFILE:
      return <SvgProfile color={color} class_name={class_name} />;
    case ROUTES.FAVORITES:
      return <SvgFavorites color={color} class_name={class_name} />;
    default:
      return <></>;
  }
};
