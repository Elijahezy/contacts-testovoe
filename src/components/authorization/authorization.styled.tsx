import styled from "styled-components"

const MainLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainImgContainer = styled.img`
    width: 60%;
    object-fit: cover;
    object-position: left;

`

const MainInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60%;

    .password-field {
        margin-top: 0px;
        border-top: 0px;
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

`

const AuthTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

`

const AuthLogo = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 10%;
`

const AuthFormContainer = styled.div`
    width: 100%;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 65px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

`

const AuthFormInput = styled.input`
    width: 80%;
    border: 0px;
    padding: 10px 0px 10px 0px;
    margin: 10px 0px 10px 10px;
    outline: none;
`

const AuthFormButton = styled.button`
    width: 100px;
    background: #358ee0;
    border: 0px;
    color: white;
    font-weight: bold;
    padding: 10px;
    margin-top: 25px;
    border: 1px solid #358ee0;
    
    &:hover {
        background: white;
        color: #358ee0;
        border: 1px solid #358ee0;
    }

`

const AuthRegistrationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    flex-direction: row;
    align-items: flex-end;
`

const AuthIconSuccess = styled.img`
    width: 40px;
    height: 40px;
`


export {
    MainLayout,
    MainContainer,
    MainImgContainer,
    MainInfoContainer,
    AuthTitle,
    AuthLogo,
    AuthFormContainer,
    AuthFormInput,
    AuthFormButton,
    AuthRegistrationContainer,
    AuthIconSuccess
}