import { NewUserButton } from "../styles/StyleUserCard";

interface IFetch {
    fetch: (data: object) => object ;
  }
export const GetNewRandomUser: React.FC<IFetch> = ({fetch}) => {
    return <NewUserButton onClick={fetch}>Get New User </NewUserButton>
}