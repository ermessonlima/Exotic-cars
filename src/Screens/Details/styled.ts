import styled from 'styled-components'

export const Container = styled.div`
 max-width: 1200px;
 align-items:center;
 justify-content:center;
`;


export const Description = styled.div`
flex-direction: row;
display: flex;
position: absolute;
 justify-content:space-between;
 flex: 1;
 width: 1200px;
 padding: 20px;

 @media (max-width: 800px) {
  height: 20px;
  font: normal normal bold 20px/37px Segoe UI;
  width: 300px;
  color: #313136;
  opacity: 1;
  
    }
`;

export const DescriptionType = styled.div`
display: flex;
margin: 0;

@media (max-width: 800px) {
  justify-content: center;
  align-items: center;
    margin-top:-200px;
    position: absolute;
    }
`;

export const DescriptionModel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

@media (max-width: 800px) {
  height: 30px;
  font: normal normal 300 20px/25px Segoe UI;
  letter-spacing: 0px;
  color: #313136;
  opacity: 1;
  margin-top: -110px;
  }

`;


export const Button = styled.button`
  width: 177px;
  height: 50px;
  background: #313136 0% 0% no-repeat padding-box;
  display: flex;
  box-shadow: 0px 5px 20px #0000001A;
  border: 1px solid #313136;
  border-radius: 25px;
  margin-top: -121px;
  align-items:center;
  justify-content: center;

  color: white;
`;

export const ButtonOutline = styled.button`
  width: 177px;
  height: 50px;
  background: transparent;
  align-items:center;
  justify-content: center;
  display: flex;
  box-shadow: 0px 5px 20px #0000001A;
  border: 1px solid #313136;
  border-radius: 25px;
  opacity: 1;


  text-align: left;
  font: normal normal bold 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #313136;
  opacity: 1;

  a {
    text-align: center;
    text-decoration: none;
    color: #313136;
    margin: 5px;
    align-items:center;
    justify-content: center;

  span {
    color: #313136;
    margin: 5px;
  }
  }

  @media (max-width: 800px) {
    margin-top:300px;
    position: absolute;
    }
`;

export const Image = styled.img`
  height: 16px;
  width:24px;
  color: #000;
`;

export const ImageCar = styled.img`
  width:700px;
  display: flex;
  margin-right:230px;

  @media (max-width: 800px) {
    width:350px;
    margin-right:100px;
    }

  @media (max-width: 320px) {
    width:300px;
    margin-right:0px;
    }

`;



export const Content = styled.div`
 height: 1000px;
`;

export const CarBox = styled.div`
display: flex;
height :600px ;
width:100%;

@media (max-width: 800px) {
  justify-content: center;
  align-items: center;
  width:100%;
    }
`;

export const ImageBrand = styled.img`
  width: 80px;
  background-color: none;
  margin: 20px;
`;

export const BoxModel = styled.div`
display: flex;
flex-direction: column;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
      }
`;




export const Title = styled.span`
height: 67px;
font: normal normal bold 50px/67px Segoe UI;
letter-spacing: 0px;
color: #313136;
opacity: 1;

@media (max-width: 800px) {
  height: 20px;
  font: normal normal bold 20px/37px Segoe UI;
  color: #313136;
  opacity: 1;
  width: 150px;
    }
 
`;

export const SubTitle = styled.span`


height: 40px;
display:flex;
width: 100%;
font: normal normal 300 30px/40px Segoe UI;
letter-spacing: 0px;
color: #313136;
opacity: 1;


@media (max-width: 800px) {

  height: 30px;

  font: normal normal 300 20px/25px Segoe UI;
  letter-spacing: 0px;
  color: #313136;
  opacity: 1;
  margin-top: 40px;
  
    }
 
`;

export const Carousel = styled.div<any>`
display: flex;
justify-content: center;
align-items: center;

overflow-x: auto;
scroll-behavior: smooth;

  .item {
    margin:10px;
    padding: 10px;
    width: 280px;

    .image {
      width: 200px;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 10px;
  }

`;


export const ImageContainer = styled.div<any>`

top: 734px;
left: 543px;
width: 473px;
height: 240px;
background: transparent linear-gradient(100deg, ${(props) => props.styled}  -50%, #D8D7D7 100%) 0% 0% no-repeat padding-box;
opacity: 1;
border-radius: 10px;
`;

export const ButtonLeft = styled.button`
  width: 42px;
  height: 42px;
  background: #313136;
  align-items:center;
  justify-content: center;
  display: flex;
  border: none;
  border-radius: 25px;
  opacity: 1;
`;

export const ButtonRight = styled.button`
  width: 42px;
  height: 42px;
  background: #313136;
  align-items:center;
  justify-content: center;
  display: flex;
  border: none;
  border-radius: 25px;
  opacity: 1;
`;


