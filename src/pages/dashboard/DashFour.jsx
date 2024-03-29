import React, { useState } from "react";
import "./styles/dashfour.css";
import { auth, database, activeUser, username } from "../firebase/firebase";
function DashFour() {
  const [del, setDel] = useState(false);
  const handleDeleteAccount = async () => {
    try {
      await auth.currentUser.delete();

      if (activeUser) {
        await database.ref(`users/${auth.currentUser.uid}`).remove();
      }
    } catch (error) {
      return;
    }
  };

  return (
    <div className="dashfour" id="dashfour">
      <div className="dashfour__container">
        <div className="dashfour__flex">
          <div className="dashtwo__two">
            <div className="dashtwo__item__container">
              <div className="dashtwo__title__flex">
                <p>NAME</p>
                <p>EMAIL</p>
                <p>JOINED</p>
              </div>
            </div>
            <div className="dashtwo__item__container">
              <div className="dashtwo__title__flex">
                <div className="dashtwo__user__img">
                  <div className="dash__avatar">
                    <p className="capitalize dash__avatar__p">{username[0]}</p>
                  </div>
                  <p className="capitalize">
                    {activeUser.firstName} {activeUser.lastName}
                  </p>
                </div>
                <p className="capitalize">{activeUser.email}</p>
                <p>2024</p>
              </div>
            </div>
            <div className="dashtwo__item__container2"></div>
          </div>
          <div className="dashfour__del">
            <div className="dashfour__div__container">
              <div className="dashfour__top">
                <div className="dashfour__left">
                  <p className="dashfour__delete__title">Delete Account</p>
                  <p className="dashfour__left__des">
                    By clicking this button your account will be deleted and any
                    and all data will be removed from our database.
                  </p>
                </div>
                <div className="dashfour__image">
                  <div className="dash__avatar">
                    <p className="capitalize dash__avatar__p">{username[0]}</p>
                  </div>
                  <p className="capitalize">
                    {activeUser.firstName} {activeUser.lastName}
                  </p>
                </div>
              </div>
              <div className="dashfour__bottom">
                {del ? (
                  <div className="dashfour__del__div">
                    <p className="dashfour__del__p">Are you sure?</p>
                    <div>
                      <button
                        onClick={() => setDel(false)}
                        className="dashfour__margin"
                      >
                        Cancel
                      </button>
                      <button onClick={handleDeleteAccount}>Delete</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setDel(true)}>Delete</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashFour;
