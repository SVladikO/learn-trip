import React from 'react';

import Skill from '../Skill/Skill.component';
import NavBar from '../NavBar/NavBar.component';

import {Wrapper, SkillsWrapper} from './App.style';

function AppComponent() {
    const skills = [
        {
            header: {
                title: 'React',
                logo: 'https://raw.githubusercontent.com/SVladikO/SkillsLogo/b601db5d2e0925f6ba04d7bc4bef2ea914fbbb3d/react.svg',
            },
            articles: [
                {id: '1', title: 'First 1', isDone: true},
                {id: '2', title: 'Second 2', isDone: false}
            ],
            style: {
                borderColor: 'blue',
            }
        },
        {
            header: {
                title: 'TypeScript',
                logo: 'https://raw.githubusercontent.com/SVladikO/SkillsLogo/b601db5d2e0925f6ba04d7bc4bef2ea914fbbb3d/ts.svg',
            },
            articles: [
                {id: '1', title: 'First 1', isDone: false},
                {id: '2', title: 'Second 2', isDone: false}
            ],
            style: {
                borderColor: 'yellow',
            }
        }];

    return (
        <Wrapper>
            <NavBar />
            <SkillsWrapper>
                {skills.map(skill => <Skill data={skill}/>)}
            </SkillsWrapper>
        </Wrapper>
    );
}

export default AppComponent;
