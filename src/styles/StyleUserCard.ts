import styled from "styled-components";
import { device } from "./DeviceMediaQuery";

export const SectionCard = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px 10px;
  width: 90%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 7px;
  background: #FEFFFD;
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
  border: 7px solid #CACBC9;
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