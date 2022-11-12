import { TYPE_ARROWS } from "../../utils/constants";
import { Left } from "./Left";
import { Right } from "./Right";

export const Arrow: React.FC<{
  type: string;
}> = ({ type }) => {
  switch (type) {
    case TYPE_ARROWS.LEFT:
      return <Left />;
    case TYPE_ARROWS.RIGHT:
      return <Right />;
    default:
      return <></>;
  }
};
