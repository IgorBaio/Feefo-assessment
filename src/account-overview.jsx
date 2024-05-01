import React from 'react';
import PropTypes from 'prop-types';
import {Header, Body} from './styles';

import './account-overview.css';
import { HeaderComponent } from './components/Header';
import SupportComponent from './components/Support';
import CardBodyComponent from './components/CardBody';

export const AccountOverview = ({ data }) => {

  return (
    <div className="AccountOverview">
      <Header>
        <HeaderComponent />
        <SupportComponent supportContact={data.supportContact} />
      </Header>
      <Body>
        <CardBodyComponent salesOverview={data.salesOverview} />
      </Body>
    </div>
  )
}

AccountOverview.propTypes = {

  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number
    })
  })

}

export default AccountOverview;