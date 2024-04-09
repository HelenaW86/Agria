import styled from "styled-components";
import { device } from "./DeviceMediaQuery";

export const SectionCard = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px 10px;
  width: 90%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 7px;
  background: #fefffd;
  font-size: 17px;
  @media ${device.laptop} {
    flex-direction: row;
    max-width: 800px;
    font-size: 20px;
    padding: 40px;
  }
`;
export const UserImg = styled.div<{ src: string }>`
  width: 190px;
  height: 190px;
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100%;
  border: 7px solid #cacbc9;
  margin: auto;
  @media ${device.laptop} {
    width: 220px;
    height: 220px;
    margin: 0;
  }
`;
export const ContentDiv = styled.div`
  text-align: left;
  margin: 10px auto;
  max-width: 100%;
  overflow-wrap: break-word;
  @media ${device.laptop} {
    margin-left: 40px;
  }
`;
export const Name = styled.h1`
  font-size: 35px;
  @media ${device.laptop} {
    font-size: 40px;
  }
`;
export const Icon = styled.img`
  width: 17px;
  margin-right: 5px;
`;
export const NewUserButton = styled.button`
  cursor: pointer;
  background: #f4f5f3;
  border: 1px solid rgba(41, 41, 41, 0.87);
  color: rgba(41, 41, 41, 0.87);
  padding: 5px 10px;
  font-size: 17px;
  border-radius: 7px;
  animation: fall 4s;
  animation-delay: 0.3s;
  margin-top: 50px;
  @media ${device.laptop} {
    position: absolute;
    right: 40px;
    margin-top: 0;
  }

  @keyframes fall {
    from {
      top: 0px;
    }
    to {
      top: 245px;
    }
  }
  &:hover {
    color: #f4f5f3;
    background: rgba(41, 41, 41, 0.87);
    border: 1px solid rgba(41, 41, 41, 0.87);
  }
`;
export const LoaderDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: white;
`;
export const LoaderImg = styled.img`
width: 80px;
height: 80px;
margin: auto;
`;