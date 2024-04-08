interface IProfileName {
    firstName: string;
    lastName: string;
  }
  
  export const ProfileName: React.FC<IProfileName> = ({firstName, lastName}) => {
    return <h1>{firstName} {lastName}</h1>;
  };
  