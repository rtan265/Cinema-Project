import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../logo.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends React.Component{
    render(){
        return (
            <Wrapper href = "https://ryantan.co.nz">
                <img src = {logo} width = "50" height = "50" alt = "ryantan.co.nz"/>
            </Wrapper>
        )
    }
}

export default Logo