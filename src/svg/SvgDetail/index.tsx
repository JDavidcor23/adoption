import { Age } from "./Age";
import { Male } from "./Male";
import { Race } from "./Race";
import { Tender } from "./Tender";
import { Cuddly } from "./Cuddly";
import { Female } from "./Female";
import { Playful } from "./Playful";
import { HeartOne } from "./HeartOne";
import { HeartTwo } from "./HeartTwo";
import { Location } from "./Location";
import { Restless } from "./Restless";
import { DETAIL } from "../../constants";

export const SvgDetail: React.FC<{
  type: string | undefined;
}> = ({ type }) => {
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
    case DETAIL.HEART_ONE:
      return <HeartOne />;
    case DETAIL.HEART_TWO:
      return <HeartTwo />;
    case DETAIL.CUDDLY:
      return <Cuddly />;
    default:
      return <></>;
  }
};
