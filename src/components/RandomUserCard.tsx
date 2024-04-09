import { useEffect, useState } from "react";
import { ProfileImage } from "./ProfileImage";
import { ProfileName } from "./ProfileName";
import { ProfileEmail } from "./ProfileEmail";
import { ProfilePhoneNumber } from "./ProfilePhoneNumber";
import { ContentDiv, SectionCard } from "../styles/StyleUserCard";

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
  const [error, setError] = useState<string | null | unknown >(null);
  const fetchRandomUser = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        // Throw an error if response is not ok
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      // Set the fetched user data in state
      setUserData(data.results[0]);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };
  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <>
      {userData ? <SectionCard>
        <ProfileImage src={userData.picture.large} alt={userData.name.first}/>
        <ContentDiv>
        <ProfileName firstName={userData.name.first} lastName={userData.name.last}/>
        <ProfileEmail email={userData.email}/>
        <ProfilePhoneNumber number={userData.phone}/>
        </ContentDiv>

      </SectionCard> : <></>}
   {error ? error : <></>}
    </>
  );
};
