import styled from 'styled-components'

export const Container = styled.div`
 max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const Card = styled.div<any>`
top: 360px;
left: 421px;
width: 287px;
height: 223px;
border-radius: 20px;
opacity: 1;
background: #F8F8FA 0% 0% no-repeat padding-box;
padding: 10px;
cursor:pointer;

  :hover {
      
      background-image:linear-gradient(-87deg, rgba(255,255,255,0.1) 0%,rgba(255,255,255,0.08) 49%,rgba(0,0,0,0) 51%,${(props) => props.styleHouver} 150%,rgba(0,0,0,0) 51%,${(props) => props.styleHouver} 150%);
  }


`;

export const TextModel = styled.h1`
  height: 22px;
  font: normal normal bold 17px/22px Segoe UI;
  color: #313136;
  opacity: 1;
`;

export const TextPrice = styled.span`
  height: 32px;
  font: normal normal bold 24px/32px Segoe UI;
  color: #313136;
  opacity: 1;
  justify-content: center;
  align-items: center;
  margin:0px;
`;

export const TextDay = styled.span`
height: 19px;
font: normal normal 400 14px/19px Segoe UI;
color: #313136;
opacity: 1;
margin:0px;
margin-top:10px;
`;

export const TextSimbol= styled.span`
text-align: left;
font: normal normal bold 14px/19px Segoe UI;
letter-spacing: 0px;
color: #313136;
opacity: 1;
margin:0px;
`;

export const TextDescription = styled.span`
  top: 150px;
  left: 437px;
  width: 90px;
  height: 22px;
  text-align: left;
  font: normal normal 300 17px/22px Segoe UI;
  letter-spacing: 0px;
  color: #313136;
  opacity: 1;
`;

export const PriceCard = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModelCard = styled.div`
`;

export const SpheraCard = styled.div`
display: flex;
justify-content: flex-end;
`;


export const Sphera = styled.div`
width: 6px;
height: 6px;
background: #c6c6c6;
border-radius: 3px;
margin:1px;
background-color: #C8C8CA;
margin-top: -15px;
`;



