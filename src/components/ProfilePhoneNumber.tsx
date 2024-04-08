interface IProfilePhone {
  number: string;
}

export const ProfilePhoneNumber: React.FC<IProfilePhone> = ({ number }) => {
  return <p>{number}</p>;
};
