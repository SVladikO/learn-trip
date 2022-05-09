import React from 'react';

import EditIconUrl from '../../icon/edit.svg';
import AddIconUrl from '../../icon/add.svg';

import Icon from '../Icon/Icon.component';

import {Wrapper, ProjectName} from "./NavBar.style";
import {Left, Right} from '../common.style';

export default () => {
    return (
        <Wrapper>
            <Left>
                <ProjectName>Learn Trip</ProjectName>
            </Left>
            <Right>
                <Icon url={AddIconUrl} />
                <Icon url={EditIconUrl} />
            </Right>
        </Wrapper>
    )
}