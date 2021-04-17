import React from 'react';
import c from './Users.module.css';

const Users = (props) =>{

  if (props.users.length === 0) {
  props.setUsers ( [
      { id: 1,
        photoUrl:
          "https://vokrug.tv/pic/news/a/d/a/4/ada46649ae337d1f9ddeb1a13b6803c7.jpg",
        followed: true,
        fullNeme: "Dmitry",
        status: "I am a boss",
        location: { city: "Minsk", country: "Belarus" }
      },
      { id: 2,
        photoUrl:
          "https://vokrug.tv/pic/news/a/d/a/4/ada46649ae337d1f9ddeb1a13b6803c7.jpg",
        followed: false,
        fullNeme: "Sasha",
        status: "I am a boss too",
        location: { city: "Moscow", country: "Rassia" }
      },
      { id: 3,
        photoUrl:
          "https://vokrug.tv/pic/news/a/d/a/4/ada46649ae337d1f9ddeb1a13b6803c7.jpg",
        followed: true,
        fullNeme: "Andrei",
        status: "I am a big boss",
        location: { city: "Dubai", country: "Amirats" }
      }
    ]
    )
  }

  return (
    <div>
      {
        props.users.map (u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={c.userPhoto} />
            </div>
            <div>
              {u.followed
              ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
              : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }

            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div> )
      }

    </div>

  )
}

export default Users
