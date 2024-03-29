
import styled from "styled-components";
import { Link } from "react-router-dom";


export const BackgroundImg = styled.img`

&:hover {
  transform: scale(1.1);
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}
width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      


`;
//// background-image: ${({ImgUrl:string}) => `url(${ImgUrl})`};

export const DirectoryBody = styled.div`
  height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: white;
      opacity: 0.7;
      position: absolute;

`


export const DirectoryContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    &:hover {
      cursor: pointer;
    ${BackgroundImg}{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    ${DirectoryBody}:hover {
      opacity: 0.9;  
      }
      };

      &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
 



`;


export const DirectoryLink = styled(Link)`

    display: flex;
    align-items: center;
    flex-direction: column;

h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        color: #4a4a4a;
      }
  
      p {
        font-weight: lighter;
        font-size: 16px;
      }
`;
