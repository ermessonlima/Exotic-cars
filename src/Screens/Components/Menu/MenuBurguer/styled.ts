import styled from 'styled-components'

export const Container = styled.div`
    .red-border {
        width: 62px;
        height: 16px;
        border: none;
        background-color: transparent;
        color: #656469;
        font-weight: bold;
        font-size: 12px;
    }

.outline-btn {
    width: 100px;
    width: 84px;
    height: 36px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #7B89F4;
    border-radius: 13px;
    opacity: 1;
    text-align: center;
}

    @media (min-width: 800px) {
        display: none;
    }
`;

export const Content = styled.div`
  
    background: #F3F1FC 0% 0% no-repeat padding-box;
    border-radius: 18px;
    opacity: 0.59;
    display: flex;
    flex-direction: column;
    padding: 0px;
`;

export const Input = styled.input`
    width: 151px;
    border: none;
    background-color: transparent;
    font: normal normal bold 12px/15px Segoe UI;
    letter-spacing: 0.96px;
    color: #656469;
    opacity: 1;
    display: flex;

`;

export const Box = styled.div`
    width: 1440px;
    flex-direction: row;
    display: flex;
    align-items: center;
`;

export const Logo = styled.h1`
    font: normal normal 600 24px/32px Segoe UI;
    letter-spacing: 0.96px;
    color: #313136;
    opacity: 1;
    display: flex;

    h1 {
        font-size: 24px;
    }
    span {
        margin-top: 10px;
        font-size: 14px;
        margin-left: 5px;
    }
`;

export const Button = styled.button`
    height: 21px;
    text-align: left;
    font: normal normal bold 16px/21px Segoe UI;
    color: #7B89F4;
    opacity: 1;
    border: transparent;
    background-color: transparent;
    margin-left: 28px;
    
`;

export const IconSearch = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    background: #FFF ;
    border-radius: 15px;
    cursor: pointer;
    margin-right: 3px;
`;

export const IconMap = styled.div`
  display: flex;
    cursor: pointer;
    margin:5px;
`;

export const IconCalendar = styled.div`
    cursor: pointer;
      display: flex;
      margin: 5px;
`;

export const BoxCalendar = styled.div`
    cursor: pointer;
    display: flex;
`;

export const BoxMap = styled.div`
    justify-content: center;
    display: flex;
`;



