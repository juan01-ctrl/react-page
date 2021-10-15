import React from 'react'
import { Container,GoBackIcon, GoBackLink, SignInContainer,FormContainer,FormContent,FormH1,FormLabel,FormInput,FormSubmit,TextPass } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <GoBackLink to='/'>
                    <GoBackIcon/>
                </GoBackLink>
                <SignInContainer>
                    <FormContainer>
                        <FormContent>
                            <FormH1>Sign in to your account</FormH1>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormInput>

                                </FormInput>
                                <FormLabel>
                                    Password
                                </FormLabel>
                                <FormInput>
                                    
                                </FormInput>
                            <FormSubmit>Continue</FormSubmit>
                            <TextPass>Forgot password</TextPass>
                        </FormContent>
                    </FormContainer>
                </SignInContainer>
            </Container>
        </>
    )
}

export default SignIn
