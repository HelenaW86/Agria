import { UserImg } from "../styles/StyleUserCard";

interface IProfileImage {
  src: string;
  alt: string;
}

export const ProfileImage: React.FC<IProfileImage> = ({src, alt}) => {
  return <UserImg src={src} title={alt}></UserImg>;
};
