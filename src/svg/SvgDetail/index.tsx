import { Age } from "./Age";
import { Ball } from "./Ball";
import { Male } from "./Male";
import { Race } from "./Race";
import { Tender } from "./Tender";
import { Female } from "./Female";
import { HeartOne } from "./HeartOne";
import { HeartTwo } from "./HeartTwo";
import { Location } from "./Location";
import { Restless } from "./Restless";
import { DETAIL } from "../../constants";

export const SvgDetail: React.FC<{
  type: string | undefined;
}> = ({ type }) => {
  console.log("🚀 ~ file: index.tsx ~ line 41 ~ type", type);
  switch (type) {
    case DETAIL.AGE:
      return <Age />;
    case DETAIL.BALL:
      return <Ball />;
    case DETAIL.MALE:
      return <Male />;
    case DETAIL.RACE:
      return <Race />;
    case DETAIL.TENDER:
      return <Tender />;
    case DETAIL.FEMALE:
      return <Female />;
    case DETAIL.RESTLESS:
      return <Restless />;
    case DETAIL.LOCATION:
      return <Location />;
    case DETAIL.HEART_ONE:
      return <HeartOne />;
    case DETAIL.HEART_TWO:
      return <HeartTwo />;
    default:
      return <></>;
  }
};
