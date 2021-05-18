import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Prealoader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={''}/>
                <p>Обо мне: {props.profile.aboutMe}</p>
            </div>
            <div className={s.contacts}>
                <ul>
                    <li>Facebook: {props.profile.contacts.facebook}</li>
                    <li>Website: {props.profile.contacts.website}</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                    <li>Twitter: {props.profile.contacts.twitter}</li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>YouTube: {props.profile.contacts.youtube}</li>
                    <li>GitHub: {props.profile.contacts.github}</li>
                    <li>MainLink: {props.profile.contacts.mainLink}</li>
                </ul>
            </div>
            <div className={s.lookingForAJob}>
                <div>Ищу работу: {props.profile.lookingForAJob ? <span>Да</span> : <span>Нет</span>}</div>
                <div>Почему ищу работу: {props.profile.lookingForAJobDescription}</div>
            </div>
            <div className={s.fullName}>
                Полное имя: {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;