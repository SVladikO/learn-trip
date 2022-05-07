import React from 'react';

import {ReactComponent as EditIcon} from '../../icon/edit.svg';
import {ReactComponent as AddIcon} from '../../icon/add.svg';

import {Wrapper, ProjectName} from "./NavBar.style";
import {Left, Right} from '../common.style';

export default () => {
    return (
        <Wrapper>
            <Left>
                <ProjectName>Learn Trip</ProjectName>
            </Left>
            <Right>
                <AddIcon style={{width: '20px'}}  />
                <EditIcon style={{width: '20px'}} />
            </Right>
        </Wrapper>
    )
}