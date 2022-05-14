import {configureStore} from "@reduxjs/toolkit";
import skillsReducer from './feature/skills/skillsSlice';

export default configureStore({
    reducer: {
        skills: skillsReducer,
    }
})
