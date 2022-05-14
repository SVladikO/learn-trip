import React from 'react';

import { useSelector, useDispatch } from "react-redux";

import Skill from '../Skill/Skill.component';
import NavBar from '../NavBar/NavBar.component';
import Button from '../Button/Button.component';

import {Wrapper, SkillsWrapper, AddTripWrapper} from './App.style';

function AppComponent() {
    const skills = useSelector(state => state.skills.value);
    const dispatch = useDispatch()

    // https://raw.githubusercontent.com/SVladikO/learn-trip-api/master/index.json

        // title: 'TypeScript',
        // logo: 'https://raw.githubusercontent.com/SVladikO/SkillsLogo/b601db5d2e0925f6ba04d7bc4bef2ea914fbbb3d/ts.svg',

    return (
        <Wrapper>
            <NavBar/>
            <SkillsWrapper>
                {skills.map(skill => <Skill key={skill.header.title} data={skill}/>)}
                <AddTripWrapper>
                    <input placeholder={'Enter trip name'}/>
                    <Button style={{height: '20px'}}>Add trip</Button>
                </AddTripWrapper>
            </SkillsWrapper>
        </Wrapper>
    );
}

export default AppComponent;
