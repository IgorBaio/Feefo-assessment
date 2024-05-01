import React from 'react';

import { Header, HeaderTitle } from './styles';


export const HeaderComponent = ({ data }) => {

    return (

        <Header>
            <HeaderTitle aria-label='Title Header' alt='Title Header Account Overview'>Account Overview</HeaderTitle>
        </Header>

    )
}


export default Header;