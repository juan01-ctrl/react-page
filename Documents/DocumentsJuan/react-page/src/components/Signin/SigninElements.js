import styled from "styled-components";
import {BiArrowBack} from 'react-icons/bi';
import {Link} from 'react-router-dom';


export const Container = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #01bf71;

`

export const GoBackIcon = styled(BiArrowBack)`
position: absolute;
font-size: 40px;
top:1rem;
left: 1rem;
color: #fff;
cursor: pointer;

@media screen and (min-width: 820px){
  top: 1.5rem;
  left: 1.5rem;
  font-size: 50px;
}
`

export const GoBackLink = styled(Link)`
list-style: none;
`
export const SignInContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const FormContainer = styled.div`
background-color:#010606 ;
width: 400px;
height: 500px;
border-radius: 13px;
padding: 3rem 1rem;
box-shadow: 7px 8px 5px -5px rgba(0,0,0,0.69);
`


export const FormContent = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const FormH1 = styled.h1`
font-size: 22px;
color: #fff;
margin-bottom: 1.5rem;
`

export const FormLabel = styled.label`
font-size: 15px;
color: #fff;
align-self: flex-start;
`

export const FormInput = styled.input`
border-style: none;
outline: none;
width: 100%;
padding: 1rem;
font-size: 15px;
color: #010606;
border-radius: 5px;
margin-bottom: 2rem;
margin-top: .6rem;
`
export const FormSubmit = styled.button`
width: 100%;
padding-top:1rem ;
padding-bottom:1rem ;
background-color: #01bf71;
outline: none;
color:#fff;
border-style: none;
border-radius:5px;
font-size: 18px;
margin-top: .3rem;
cursor: pointer;
transition: all .3s ease;

/* &:hover{
  transform: scale(1.02);
} */
`

export const TextPass= styled.p`
cursor: pointer;
font-size: 14px;
color: #fff;
transition: .2s ease-in-out;
&:hover{
 color: #01bf71;
}
`


