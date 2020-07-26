import React from 'react';
import styled from 'styled-components';
import photo from '../../assets/profileimg.jpg';
import Image from 'react-bootstrap/Image';

const ProfileContainer = styled.div`
    margin-top: 5rem;
`
const ProfileImg = styled.img`
    height: 8rem;
`
const ProfileName = styled.h1`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 300;
    /* color: ${({ theme }) => theme.textColor}; */
`

const Profile = () => {
    return (
        <ProfileContainer>
            <Image src={photo} roundedCircle fluid />
            <ProfileName>Alejandro Astudillo V.</ProfileName>
        </ProfileContainer>
    )
}

export default Profile