import React, { useContext, useEffect } from 'react';

export const Header = ({ history }) => {
  const logout = () => {
    history.push(`/Login`);
  };
  const Create=()=>{
    //create or register new user
   history.push(`/Login`)
  }
   

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <button
          type="button"
          className="btn btn-link"
          style={{ color: 'red' }}
          onClick={logout}
        >
          Logout
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          className="btn btn-link"
          style={{ color: 'red' }}
          onClick={Create}
        >
          Create(SignUp)
        </button>
      </li>
    </ul>
  );
};
