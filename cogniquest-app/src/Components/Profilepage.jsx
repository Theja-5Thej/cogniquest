import React, { useRef, useState } from 'react'
import { Container, FormContainer, Header,Input,SubContainer ,MainContainer,InputContaner,Label, Textarea, Button} from './Styledcomponents/styledcomponents'
import { useSelector } from 'react-redux'
const Profilepage = () => {
    const userData = useSelector((state)=>state.user[0])
    const [formData,setFormData] = useState({
        company:'Creative Code Inc.',
        id:userData.id,
        username:'',
        email:userData.email,
        firstname:'',
        lastname:'',
        address:'',
        city:'',
        country:'',
        postalCode:'',
        description:''
    })
  const usernameRef = useRef()
  const emailRef = useRef()
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const addressRef = useRef()
  const cityRef = useRef()
  const countryRef = useRef()
  const postalCodeRef = useRef()
  const descriptionRef = useRef()
    const handleChange = (e)=>{
            setFormData(prev=>({
                ...prev,
                [e.target.name]:e.target.value
            }))
    }
  
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(formData.username !==""){
            usernameRef.current.style.border='none'
            if(formData.email!==""){
                emailRef.current.style.border='none'
                if(formData.firstname !==""){
                    firstnameRef.current.style.border='none'
                    if(formData.lastname !==""){
                        lastnameRef.current.style.border='none'
                        if(formData.address!==""){
                            addressRef.current.style.border='none'
                            if(formData.city!=""){
                                cityRef.current.style.border='none'
                                if(formData.country!==""){
                                    countryRef.current.style.border='none'
                                    if(formData.postalCode!==""){
                                        postalCodeRef.current.style.border='none'
                                        if(formData.description){
                                            descriptionRef.current.style.border='none'
                                            console.log(formData)
                                            setFormData({
                                                company:'Creative Code Inc.',
                                                id:userData.id,
                                                username:'',
                                                email:userData.email,
                                                firstname:'',
                                                lastname:'',
                                                address:'',
                                                city:'',
                                                country:'',
                                                postalCode:'',
                                                description:''
                                            })
                                        }else{
                                            descriptionRef.current.style.border='1.5px solid red'
                                        }
                                    }else{
                                        postalCodeRef.current.style.border='1.5px solid red'
                                    }
                                }else{
                                    countryRef.current.style.border='1.5px solid red'
                                }
                            }else{
                                cityRef.current.style.border='1.5px solid red'
                            }
                        }else{
                            addressRef.current.style.border='1.5px solid red'
                        }
                    }else{
                        lastnameRef.current.style.border='1.5px solid red'
                    }
                }else{
                    firstnameRef.current.style.border='1.5px solid red'
                }
            }else{
                emailRef.current.style.border='1.5px solid red'
            }
        }else{
            usernameRef.current.style.border='1.5px solid red'
        }
    
    }
  return (
    <MainContainer>
        <Header txtdecoration="underline" fontweight='800' paddingLeft='25%'>Profile</Header>
        <Container width="75%">
        <Header >Edit Profile</Header>
        <FormContainer>
        <SubContainer>
            <InputContaner width='39%'>
            <Label>COMPANY (DISABLED)</Label>
            <Input value='Creative Code Inc.' readOnly/>  
            </InputContaner>
            <InputContaner width='25%'>
            <Label>USERNAME*</Label>
            <Input placeholder='Username' ref={usernameRef} name='username' value={formData.username} onChange={e=>handleChange(e)}/>  
            </InputContaner>
            <InputContaner width='29%'>
            <Label>EMAIL ADDRESS*</Label>
            <Input value={userData.email} ref={emailRef} placeholder='Email' name='email' onChange={e=>handleChange(e)}/>  
            </InputContaner>
        </SubContainer>
        <SubContainer>
            <InputContaner width="49%">
            <Label>FIRST NAME*</Label>
            <Input placeholder='FirstName' ref={firstnameRef} name='firstname' value={formData.firstname} onChange={e=>handleChange(e)}/>
            </InputContaner>
            <InputContaner width="50%">
            <Label>LAST NAME*</Label>
            <Input placeholder='LastName' ref={lastnameRef}  value={formData.lastname}name='lastname' onChange={e=>handleChange(e)}/>
            </InputContaner>
        </SubContainer>
        <SubContainer>
        <InputContaner width='100%'>
        <Label>ADDRESS*</Label>
        <Input placeholder='Home Address' ref={addressRef}  value={formData.address} width='98%' name='address' onChange={e=>handleChange(e)}/>
        </InputContaner>
        </SubContainer>
        <SubContainer>
            <InputContaner width='31%'>
            <Label>CITY*</Label>
            <Input placeholder='City' ref={cityRef} name='city' value={formData.city} onChange={e=>handleChange(e)} />  
            </InputContaner>
            <InputContaner width='31%'>
            <Label>COUNTRY*</Label>
            <Input placeholder='Country'  ref={countryRef} name='country' value={formData.country} onChange={e=>handleChange(e)} />  
            </InputContaner>
            <InputContaner width='31%'>
            <Label>POSTAL CODE*</Label>
            <Input  placeholder='ZIP Code' ref={postalCodeRef} name='postalCode' value={formData.postalCode} onChange={e=>handleChange(e)} />  
            </InputContaner>
        </SubContainer>
        <SubContainer>
            <InputContaner>
            <Label>ABOUT ME*</Label>
            <Textarea placeholder='Here can be your description...' value={formData.description} ref={descriptionRef} name='description' onChange={e=>handleChange(e)} ></Textarea>
            </InputContaner>
        </SubContainer>
        <Container  width ='100%'align='flex-end' justify='flex-end' border='none'>
        <Button width="30%" onClick={e=>handlesubmit(e)}>Update Profile</Button>
        </Container>
        </FormContainer>
        </Container>
    
    </MainContainer>
  )
}

export default Profilepage
