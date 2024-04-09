import  logo from "../assets/email.svg"
import { Icon } from "../styles/StyleUserCard";
interface IProfileEmail {
  email: string;
}

export const ProfileEmail: React.FC<IProfileEmail> = ({ email }) => {
  return (<> <p><Icon src={logo} alt="mail" /> {email}</p></>);
};
