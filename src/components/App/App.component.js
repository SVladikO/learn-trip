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
                {id: '2', title: 'ttt', isDone: true},
                {id: '3', title: 'ttt', isDone: true},
                {id: '4', title: 'ttt', isDone: true},
                {id: '5', title: 'ttt', isDone: true},
                {id: '6', title: 'ttt', isDone: true},
                {id: '7', title: 'ttt', isDone: false},
                {id: '8', title: 'ttt', isDone: false},
                {id: '9', title: 'ttt', isDone: false},
                {id: '10', title: 'ttt', isDone: false},
                {id: '11', title: 'ttt', isDone: false},
                {id: '12', title: 'ttt', isDone: false},
                {id: '13', title: 'ttt', isDone: false},
                {id: '14', title: 'ttt', isDone: false},
                {id: '15', title: 'ttt', isDone: false},
                {id: '16', title: 'ttt', isDone: false},
                {id: '17', title: 'ttt', isDone: false},
            ],
        },
        {
            header: {
                title: 'TypeScript',
                logo: 'https://raw.githubusercontent.com/SVladikO/SkillsLogo/b601db5d2e0925f6ba04d7bc4bef2ea914fbbb3d/ts.svg',
            },
            articles: [
                {id: '1', title: 'First 1', isDone: true},
                {id: '2', title: 'ttt', isDone: false}
            ],
        }];

    return (
        <Wrapper>
            <NavBar />
            <SkillsWrapper>
                {skills.map(skill => <Skill data={skill}/>)}
                <button style={{height: '20px'}}>Add trip</button>
            </SkillsWrapper>
        </Wrapper>
    );
}

export default AppComponent;
