import React, {useState}from 'react'
import './Login.css'
import image from './images/OIP.jpeg'
import {auth} from './firebase'
import { useDispatch } from 'react-redux'
import {login} from './features/userSlice'

function Login() {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[name,setName] = useState("")
  const[profilePic,setProfilePic]=useState("")
  const dispatch=useDispatch();


    const LoginToApp =(e) =>{
      e.preventDefault()
      auth.signInWithEmailAndPassword(email,password)
      .then(userAuth =>{
        dispatch(login({
              email:userAuth.user.email,
              uid:userAuth.user.uid,
              displayName: userAuth.user.displayName,
              profileURL:userAuth.user.photoURL
        }))
      }).catch(error=>{
        alert(error)
      })
    }
    const Register= ()=>{
      if(!name){
        return alert("Please enter a full name!")
      }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
          userAuth.user.updateProfile({
            displayName:name,
            photoUrl:profilePic,
          })
          .then(()=>{
            dispatch(
              login({
              email:userAuth.user.email,
              uid:userAuth.user.uid,
              displayName:name,
              photoUrl:profilePic,
            })
            )
          })
        }).catch((error)=>alert(error))
      

      
    }
  return (
    <div className='login'>
      <img src={image} alt="" />

      <form action="">
        <input value={name}
          onChange ={ (e) =>setName(e.target.value)}
            placeholder='Full Name (required if registering)' type="text" />
        
        
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
           placeholder="Email" type="email" />
        
        <input value={profilePic} 
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL" type="text" />

          <input value={password}
          onChange ={ (e) =>setPassword(e.target.value)}
            placeholder="Enter your Password" type="password" />
        
        <button type="submit" onClick={LoginToApp}>Sign In</button>
      </form>
      <p>Not a member? <span className='login__register'onClick={Register}>Register Now</span></p>
    </div>
  )
}

export default Login
