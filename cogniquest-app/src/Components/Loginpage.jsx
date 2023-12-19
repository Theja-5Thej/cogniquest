import React, { useState ,useRef} from 'react'
import { IoLogoGoogle } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { FaFacebookF ,FaGithubAlt} from "react-icons/fa";
import { Icon,Container,IconContainer,LineContainer,Header,Line,FormContainer, Input,Button,CaptchaContainer, Label} from './Styledcomponents/styledcomponents';
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector,useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from './Redux/UserSlice';
const Loginpage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.user.data)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [userData,setUserData] = useState({
    emailId:"",
    passwords:""
  })
  const [captcha,setCaptcha] = useState(false)
  const [emailError,setEmailError] = useState()
  const [passwordError,setPasswordError] = useState()
  const emailRef = useRef()
  const passwordRef = useRef()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      emailRef.current.style.border ='1.5px solid red' 
      setEmailError("*Please enter emial address")
    }
    if(emailRegex.test(email)){
      setEmailError("")
      emailRef.current.style.border='none'
    }  
    if(password.length<10){
      passwordRef.current.style.border='1.5px solid red'
      setPasswordError("Password Length must be 10 charector or more than 10")
      return
    }
    if(password.length>=10){
      setPasswordError("")
      passwordRef.current.style.border='none'
    }
    
    setUserData(prev=>({
      ...prev,
      emailId:email,
      passwords:password

    }))
     
    if(captcha){
      dispatch(addUser({
       id:nanoid(),
       email,
       password
      }))
      navigate('profile')
    }
    
  }
  return (
    <>
    <Container border ='none'>
    <Header>Login with</Header>
    <IconContainer>
        <Icon bgcolor="#2C3335"><FaGithubAlt/></Icon>
        <Icon bgcolor ="#FF3E4D"><IoLogoGoogle/></Icon>
        <Icon bgcolor ="#4834DF"><FaFacebookF/></Icon>
    </IconContainer>
    <LineContainer> <Line/>or<Line/></LineContainer>
    <FormContainer>
    <Input type="email" placeholder='Email' ref={emailRef} onChange={e=>setEmail(e.target.value)} bgcolor='#DAE0E2'/>
    <Label color='red' fontSize='10px'>{emailError}</Label>
    <Input placeholder='Password'  ref={passwordRef} onChange={e=>setPassword(e.target.value)} bgcolor='#DAE0E2'/>
    <Label color='red' fontSize='10px'>{passwordError}</Label>
    <Button onClick={handleSubmit} >LOGIN</Button>
    </FormContainer>
    <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
        onChange={()=>setCaptcha(true)}
      />
    </Container>
    <p>Hello Sir, the table assignment I am able to do in hardcode way but i tried to do it in mapping but i cant dont do it that is new challenging for me If you know how to do it can please tell me . I want to learn ...Thaniking you sir</p>
    </>
  )
}

export default Loginpage
