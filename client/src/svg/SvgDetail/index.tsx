import { Age } from "./Age";
import { Male } from "./Male";
import { Race } from "./Race";
import { Tender } from "./Tender";
import { Cuddly } from "./Cuddly";
import { Female } from "./Female";
import { Playful } from "./Playful";
import { Heart } from "./Heart";
import { Location } from "./Location";
import { Restless } from "./Restless";
import { DETAIL } from "../../utils/constants";

export const SvgDetail: React.FC<{
  type: string | undefined;
  fill?: string | undefined;
}> = ({ type, fill }) => {
  switch (type) {
    case DETAIL.AGE:
      return <Age />;
    case DETAIL.MALE:
      return <Male />;
    case DETAIL.RACE:
      return <Race />;
    case DETAIL.TENDER:
      return <Tender />;
    case DETAIL.FEMALE:
      return <Female />;
    case DETAIL.PLAYFUL:
      return <Playful />;
    case DETAIL.RESTLESS:
      return <Restless />;
    case DETAIL.LOCATION:
      return <Location />;
    case DETAIL.CUDDLY:
      return <Cuddly />;
    case DETAIL.HEART:
      return <Heart fill={fill} />;
    default:
      return <></>;
  }
};
