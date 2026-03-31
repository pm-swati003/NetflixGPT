import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const handleGptSearchClick = () => {
    //Toggle GPT Search
      dispatch(toggleGptSearchView());
  };

      useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser ({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse");

        } else {
            dispatch(removeUser());
            navigate("/");
        }
        });

        // Unsubscribe when component is unmount
        return () => unsubscribe();

    }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
       <img className='w-44 mx-auto md:mx-0'
        src={LOGO}
       alt='logo'/>

       {user && (
       <div className='flex p-2 justify-between w-full md:w-auto'>
        {showGptSearch && (
          <select 
          className='bg-gray-900 text-white p-2 m-2'
        onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => (
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))}
        </select>
      )};

       <button 
       className='py-2 px-4 bg-purple-800 rounded-lg mx-4 my-2 text-white'
       onClick={handleGptSearchClick}
       >
        {showGptSearch? "Homepage" : "GPT Search"}
        </button>
        <img className='hidden md:block w-12 h-10 mx-4 my-2' src={user?.photoURL} alt='usericon'/>
        <button 
        className='bg-red-500 rounded-lg py-2 px-4 text-white mx-4 my-2' onClick={handleSignOut}>Sign Out</button>
        </div>
      )} 
    </div>
  )
}

export default Header