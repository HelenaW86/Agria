import { useEffect, useState } from "react";
import { ProfileImage } from "./ProfileImage";
import { ProfileName } from "./ProfileName";
import { ProfileEmail } from "./ProfileEmail";
import { ProfilePhoneNumber } from "./ProfilePhoneNumber";

interface IUserData {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  email: string;
  gender: string;
  picture: {
    large: string;
  };
}
export const RandomUserCard = () => {
  const URL = "https://randomuser.me/api/";
  const [userData, setUserData] = useState<IUserData | null>(null);
  const fetchRandomUser = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      // Set the fetched user data in state
      setUserData(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <>
      {userData ? <section>
        <ProfileImage src={userData.picture.large} alt={userData.name.first}/>
        <ProfileName firstName={userData.name.first} lastName={userData.name.last}/>
        <ProfileEmail email={userData.email}/>
        <ProfilePhoneNumber number={userData.phone}/>
      </section> : <></>}
    </>
  );
};
