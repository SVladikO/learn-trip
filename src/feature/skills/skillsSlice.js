import {createSlice} from '@reduxjs/toolkit'

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        value: [
            {
                "header": {
                    "title": "React",
                    "logo": "https://raw.githubusercontent.com/SVladikO/SkillsLogo/b601db5d2e0925f6ba04d7bc4bef2ea914fbbb3d/react.svg"
                },
                "articles": [
                    {
                        "group_title": "MAIN CONCEPTS",
                        "list": [
                            {"title": "Hello World", "isDone": true},
                            {"title": "Introducing JSX", "isDone": true},
                            {"title": "Rendering Elements", "isDone": true},
                            {"title": "Components and Props", "isDone": true},
                            {"title": "State and Lifecycle", "isDone": true},
                            {"title": "Handling Events", "isDone": true},
                            {"title": "Conditional Rendering", "isDone": true},
                            {"title": "lists and Keys", "isDone": true},
                            {"title": "Forms", "isDone": true},
                            {"title": "Lifting State Up", "isDone": true},
                            {"title": "Composition vs Inheritance", "isDone": true},
                            {"title": "Thinking In React", "isDone": true}
                        ]
                    }]
            }]
    },
    reducers: {
        init: state => {

        },
        switchGroup: state => {

        },
        addArticleToDone: state => {

        },
    }

})

export const {init, switchGroup, addArticleToDone} = skillsSlice.actions

export default skillsSlice.reducer