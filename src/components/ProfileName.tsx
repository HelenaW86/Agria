import { Name } from "../styles/StyleUserCard";

interface IProfileName {
    firstName: string;
    lastName: string;
  }
  
  export const ProfileName: React.FC<IProfileName> = ({firstName, lastName}) => {
    return <Name>{firstName} {lastName}</Name>;
  };
  