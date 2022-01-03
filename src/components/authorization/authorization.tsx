import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction, registrateAction } from '../../store/api-actions';
import * as S from './authorization.styled';

function Authorization() {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState(false);

    const onAuthorizeButtonClick = () => {
        dispatch(loginAction({ login, password }))
    }

    const onRegistrateButtonClick = () => {
        dispatch(registrateAction({ id: Math.random(), login, password }, setRegistrationStatus))
    }

    return (
        <>
            <S.MainLayout>
                <S.MainContainer >
                    <S.MainInfoContainer >
                        <S.AuthTitle >
                            <S.AuthLogo src='/img/authorization.png' />
                            Добро пожаловать
                        </S.AuthTitle>
                        <S.AuthFormContainer >
                            <S.AuthFormInput placeholder='Логин' onInput={(evt) => setLogin(evt.currentTarget.value)} required />
                        </S.AuthFormContainer>
                        <S.AuthFormContainer className='password-field'>
                            <S.AuthFormInput placeholder='Пароль' onInput={(evt) => setPassword(evt.currentTarget.value)} required />
                        </S.AuthFormContainer>
                        <S.AuthFormButton
                            type='button'
                            onClick={() => onAuthorizeButtonClick()}
                        >Войти</S.AuthFormButton>
                        <S.AuthRegistrationContainer >
                            <S.AuthFormButton
                                type='button'
                                onClick={() => onRegistrateButtonClick()}
                                style={{ width: '200px' }}
                            >Зарегистрироваться</S.AuthFormButton>
                            {
                                registrationStatus ?
                                    <S.AuthIconSuccess src="/svg/success.svg" alt="" /> :
                                    null
                            }
                        </S.AuthRegistrationContainer>
                    </S.MainInfoContainer>
                </S.MainContainer>
                <S.MainImgContainer src='/img/auth-img.jpg' />

            </S.MainLayout>
        </>
    );
}

export default Authorization;