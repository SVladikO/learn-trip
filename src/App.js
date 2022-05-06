import React from 'react';

import Skill from './components/Skill/Skill.component';

import './App.css';

function App() {
    const skills = [
        {
            header: {
                title: 'React',
                logo: 'https://raw.githubusercontent.com/SVladikO/SkillsLogo/b601db5d2e0925f6ba04d7bc4bef2ea914fbbb3d/react.svg',
            },
            articles: [
                {id: '1', title: 'First 1', isDone: false},
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
        <div className="App">
            {skills.map(skill => <Skill data={skill}/>)}
        </div>
    );
}

export default App;
