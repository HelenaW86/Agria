import { useEffect, useState } from "react";

interface UserData {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  email: string;
  gender: string;
  picture: {
    medium: string;
  };
}
export const RandomUserCard = () => {
  const URL = "https://randomuser.me/api/";
  const [, setUserData] = useState<UserData | null>(null);
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
      <h1>Agria❤️</h1>
    </>
  );
};
