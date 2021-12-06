import React,{useContext,useEffect,useState} from 'react';
import { FirebaseContext } from '../../Store/FirebaseContext'
import { PostContext } from '../../Store/PostContext'

import './View.css';
function View() {

    const [userDetails,setUserDetails]=useState()
    const {firebase}=useContext(FirebaseContext)
    const {postDetails}=useContext(PostContext)

    useEffect(()=>{
        const userId=postDetails.userId
        firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
            res.forEach(doc=>{
                setUserDetails(doc.data())
            })
        })
    },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails?.username}</p>
          <p>{userDetails?.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
