import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContactsAction, updateContact } from '../../../store/api-actions';
import { Contact } from '../../../types/state';
import * as S from './contacts-card.styled'


function ContactsCard(props: Contact) {
    const { id, name, phone, email } = props;
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [editStatus, setEditStatus] = useState(false);

    const onSaveButtonClick = () => {
        dispatch(updateContact({ name: newName !== '' ? newName : name, phone: newPhone !== '' ? newPhone : phone, email: newEmail !== '' ? newEmail : email, id: id }))
        dispatch(fetchContactsAction())
    }

    const onDeleteButtonClick = () => {
        dispatch(deleteContact(props))
        dispatch(fetchContactsAction())
    }

    const onEditButtonClick = () => {
        setEditStatus(true);
    }

    return (
        <>
            <S.ContactsInfoContainer >
                <S.UserContainerRow >
                    <S.UserImg src='/svg/user.svg' />
                    <S.UserName type='text' defaultValue={name} onInput={(evt) => setNewName(evt.currentTarget.value)} disabled={editStatus ? false : true} />
                    <S.UserDeleteButton
                        type='button'
                        onClick={() => onDeleteButtonClick()}
                    >
                        Delete
                    </S.UserDeleteButton>
                </S.UserContainerRow>
                <S.UserLine />
                <S.UserLabel htmlFor='phone' >
                    Phone
                </S.UserLabel>
                <S.UserInput
                    id='phone'
                    placeholder='+ 7 (999) 999 99 99'
                    type='text'
                    defaultValue={phone}
                    onInput={(evt) => setNewPhone(evt.currentTarget.value)}
                    disabled={editStatus ? false : true}
                />
                <S.UserLabel htmlFor='email'>
                    Email
                </S.UserLabel>
                <S.UserInput
                    id='email'
                    placeholder='email@gmail.com'
                    type='text'
                    defaultValue={email}
                    onInput={(evt) => setNewEmail(evt.currentTarget.value)}
                    disabled={editStatus ? false : true}
                />

                <S.UserButtonContainer >
                    <S.UserSaveButton
                        type='button'
                        onClick={() => onEditButtonClick()}
                        disabled={editStatus ? true : false}
                        style={editStatus ? { background: '#358EE0', border: '1px solid #358EE0', color: 'white' } : {}}
                    >
                        Edit
                    </S.UserSaveButton>
                    <S.UserSaveButton
                        type='button'
                        onClick={() => onSaveButtonClick()}
                        disabled={editStatus ? false : true}
                        style={editStatus ? {} : { background: '#358EE0', border: '1px solid #358EE0', color: 'white' }}
                    >
                        Save
                    </S.UserSaveButton>
                </S.UserButtonContainer>
            </S.ContactsInfoContainer>
        </>
    );
}

export default ContactsCard