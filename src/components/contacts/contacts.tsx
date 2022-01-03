import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contact, State } from '../../types/state';
import ContactsCard from './contacts-card/contacts-card';
import * as S from './contacts.styled';
import uniqid from 'uniqid';
import { fetchContactsAction, logoutAction, postContact } from '../../store/api-actions';

function Contacts() {
    const dispatch = useDispatch()

    const contacts = useSelector<State, Contact[]>((state) => state.contacts)
    const [searchResult, setSearchResult] = useState('');

    const [updatedContacts, setUpdatedContacts] = useState(contacts);

    useEffect(() => {
        setUpdatedContacts(contacts)
    }, [contacts])


    const memorizedContacts = useMemo(() => updatedContacts.filter((contact) => {
        if (searchResult === '') {
            return contact;
        }
        if (contact.name.toLowerCase().includes(searchResult.toLowerCase())) {
            return contact;
        }
        return null;
    }).map((contact) => <ContactsCard {...contact} key={uniqid()} />), [searchResult, updatedContacts])

    const onAddUserClick = () => {
        dispatch(postContact({ id: 2132, name: '', phone: '', email: '' }))
        dispatch(fetchContactsAction())
    }

    const onLogoutButtonClick = () => {
        dispatch(logoutAction())
    }

    return (
        <>
            <S.MainLayout >
                <S.UserAddButton
                    style={{ marginTop: '20px' }}
                    onClick={() => onLogoutButtonClick()}
                >
                    Logout
                </S.UserAddButton>
                <S.SearchContainer >
                    <S.SearchLabel htmlFor='user-search'>
                        Find User
                    </S.SearchLabel>
                    <S.SearchInput id='user-search' onInput={(evt) => setSearchResult(evt.currentTarget.value)} />
                </S.SearchContainer>
                <S.UserAddButton type='button' onClick={() => onAddUserClick()}>
                    Add User
                </S.UserAddButton>
                <S.ContactsContainer >

                    {
                        memorizedContacts
                    }

                </S.ContactsContainer>
            </S.MainLayout>
        </>
    );
}

export default Contacts;