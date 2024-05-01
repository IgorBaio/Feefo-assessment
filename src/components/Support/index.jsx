import React from 'react';
import PropTypes from 'prop-types';
import {
  EmailArea,
  EmailText,
  InitialLetter,
  PhoneText,
  SupportContact,
  SupportContactIcon,
  SupportContactInfo,
  SupportContainer,
  SupportTitleArea,
  SupportTitleText,
  TitleSupport
} from './styles';


export const SupportComponent = ({ supportContact }) => {

  return (

    <SupportContainer>
      <SupportTitleArea>
        <SupportTitleText aria-label='support title' alt='support title: YOUR FEEFO SUPPORT CONTACT'>YOUR FEEFO SUPPORT CONTACT</SupportTitleText>
      </SupportTitleArea>
      <SupportContact>
        <SupportContactIcon aria-label='support profile icon' alt='support profile icon' data-testid='supportProfileIcon'>
          <InitialLetter>{supportContact.name.slice(0,1)}</InitialLetter>
        </SupportContactIcon>

        <SupportContactInfo>
          <TitleSupport aria-label='title support' alt='name of support' data-testid='titleSupport'>{supportContact.name}</TitleSupport>
          <EmailArea>
            <img data-testid='mailIcon' width="16" height="16" src="https://img.icons8.com/material-rounded/24/new-post.png" alt="mail icon" aria-label="mail icon" />
            <EmailText aria-label='support email' alt='support email' data-testid='supportEmail'>{supportContact.email}</EmailText>
            <PhoneText aria-label='support phonel' alt='support phonel: 020 3362 4208' data-testid='supportPhone'>020 3362 4208</PhoneText>
          </EmailArea>


        </SupportContactInfo>
      </SupportContact>
    </SupportContainer>

  )
}


SupportComponent.propTypes = {

  supportContact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  })

}


export default SupportComponent;