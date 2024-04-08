interface IProfileEmail {
  email: string;
}

export const ProfileEmail: React.FC<IProfileEmail> = ({ email }) => {
  return <p>{email}</p>;
};
