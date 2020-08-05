import React from 'react';
import { Image, Container, Header, Card } from 'semantic-ui-react';
import './Profile.scss';
import photo from '../../assets/images/profileimg.jpg';



const Profile = () => {
    return (
        <div className="profile-container">
          
            <Image src={photo} size='small' circular fluid centered/>

            <div className="profile-data">
                <p className="profile-name">
                    Alejandro Astudillo V.
                </p>
                <p className="profile-position">
                    Ph.D. Researcher
                </p>
                <p className="profile-workplace">
                    MECO Research Team, KU Leuven <br/>
                    DMMS-M Core Lab, Flanders Make
                </p>
                
            </div>   

        </div>
    )
}

export default Profile;