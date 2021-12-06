import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContext,FirebaseContext} from '../../Store/FirebaseContext'

function Header() {

  const {user} = useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)

  const history=useHistory()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={(e)=>{
              e.preventDefault()
              history.push('/')
            }} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span className='logOptions' onClick={()=>history.push('/login')}>{user ? `Welcome ${user.displayName}`:'Login'}</span>
          <hr />
        </div>
        {user && <span className='logOptions' onClick={()=>{
          firebase.auth().signOut()
          history.push('/')
        }}>Logout</span>}

        <div onClick={(e)=>{e.preventDefault()
              {user ?  history.push('/create'):history.push('/login')}
            }} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
