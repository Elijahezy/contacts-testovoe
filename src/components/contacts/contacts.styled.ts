import styled from "styled-components"

const MainLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SearchContainer = styled.div`
    width: 640px;
    margin-top: 80px;
`

const SearchLabel = styled.label`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #358EE0; 
    align-self: flex-start;
`

const SearchInput = styled.input`
    width: 640px;
    outline: none;
    border: 2px solid #358EE0;
    box-sizing: border-box;
    padding: 5px 0px 5px 0px;
    font-size: 24px;
    margin-top: 11px;
    border-radius: 3px;
`

const ContactsContainer = styled.div`
    width: 1280px;
    height: 100%;
`

const UserAddButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 16px;
    background-color: #358EE0;
    color: white;
    border: 2px solid #358EE0;
    font-weight: bold;
    align-self: flex-end;
    border-radius: 3px;
    margin-top: 120px;
    margin-right: 180px;

    :hover {
        background-color: white;
        color: #358EE0;
    }

`

export {
    MainLayout,
    SearchInput,
    ContactsContainer,
    SearchLabel,
    SearchContainer,
    UserAddButton
}