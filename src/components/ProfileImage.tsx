interface IProfileImage {
  src: string;
  alt: string;
}

export const ProfileImage: React.FC<IProfileImage> = ({src, alt}) => {
  return <img src={src} alt={alt} />;
};
