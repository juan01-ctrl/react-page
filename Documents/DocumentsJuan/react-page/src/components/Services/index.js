import React from 'react'
import { ServicesContainer, ServicesH2, ServicesCard, ServicesWrapper, ServicesIcon,ServicesH3,ServicesP } from './ServicesElements'
import icon1 from '../../assets/images/svg-1.svg'
import icon2 from '../../assets/images/svg-5.svg'
import icon3 from '../../assets/images/svg-4.svg'

const Services= () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH2>
                Our Services
            </ServicesH2>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                    <ServicesH3>Reduce expenses</ServicesH3>
                    <ServicesP>We help reduce your fess and increase you overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH3>Virtual Offices</ServicesH3>
                    <ServicesP>You can accces our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH3>Premium Benefits</ServicesH3>
                    <ServicesP>Unlock our special membreship card that return 5% chash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
