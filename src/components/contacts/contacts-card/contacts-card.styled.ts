import styled from "styled-components"

const ContactsInfoContainer = styled.div`
    width: 320px;
    height: 306px;
    display: flex;
    flex-direction: column;
    background-color: #358EE0;
    border-radius: 3px;
    float: left;
    margin-left: 106px;
    margin-top: 60px;
`

const UserContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`

const UserLine = styled.div`
    width: 295px;
    height: 1px;
    background-color: white;
    transform: rotate(-0.39deg);
    margin: 0 auto;
    margin-bottom: 13px;
`

const UserImg = styled.img`
    width: 60px;
    height: 60px;
`

const UserName = styled.input`
    color: white;
    font-size: 24px;
    line-height: 28px;
    background-color: #358EE0;
    border: 0px;
    outline: none;
    width: 100%;
    margin-right: 12px;
`

const UserLabel = styled.label`
    font-size: 12px;
    line-height: 14px;
    color: white;
    padding: 10px 10px 10px 0px;
    margin-left: 12px;
`

const UserInput = styled.input`
    font-size: 24px;
    line-height: 28px;
    background-color: #358EE0;
    border: none;
    outline: none;
    color: white;
    place-content: white;


    margin-left: 12px;

    ::placeholder {
        color: rgba(255, 255, 255, 0.6);

    }

`

const UserButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 13px;
`

const UserSaveButton = styled.button`
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    width: 90px;
    height: 43px;
    font-weight: bold;
    font-size: 18px;
    color: #358EE0;
    margin-top: 49px;
    align-self: flex-end;
    margin-right: 13px;
    border-radius: 3px;

    :hover {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    }
`

const UserDeleteButton = styled.button`
    margin-right: 12px;
    background-color: #358EE0;
    border: none;
    color: white;
    padding: 5px 0px 1px 0px;
    border-bottom: 1px solid white;
`



export {
    ContactsInfoContainer,
    UserImg,
    UserName,
    UserContainerRow,
    UserLine,
    UserLabel,
    UserInput,
    UserSaveButton,
    UserDeleteButton,
    UserButtonContainer
}