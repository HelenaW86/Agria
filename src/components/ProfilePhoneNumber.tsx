import  logo from "../assets/phone.svg"
import { Icon } from "../styles/StyleUserCard";

interface IProfilePhone {
  number: string;
}

export const ProfilePhoneNumber: React.FC<IProfilePhone> = ({ number }) => {
  return <p><Icon src={logo} alt="phone" />{number}</p>;
};
