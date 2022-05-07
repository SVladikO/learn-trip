import React from 'react';

import {ReactComponent as EditIcon} from '../../icon/edit.svg';

import {Wrapper, Left, ProjectName, Right} from "./NavBar.style";

export default () => {
    return (
        <Wrapper>
            <Left>
                <ProjectName>Learn Trip</ProjectName>
            </Left>
            <Right>
                <EditIcon style={{width: '20px'}}/>
            </Right>
        </Wrapper>
    )
}