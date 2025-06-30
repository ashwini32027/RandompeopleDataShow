import React from 'react'

const ProfileCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Profile" />
      <h1 className="name">{props.name}</h1>
      <p className="mail">{props.mail}</p>
      <p className="country">{props.country}</p>
    </div>
  )
}

export default ProfileCard;
