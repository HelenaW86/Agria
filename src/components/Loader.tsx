import { LoaderDiv, LoaderImg } from "../styles/StyleUserCard";
import spinner from "../assets/spinner.svg";
export const Loader: React.FC = () => {
  return (
    <LoaderDiv>
      <LoaderImg src={spinner} alt="loading" />
    </LoaderDiv>
  );
};
