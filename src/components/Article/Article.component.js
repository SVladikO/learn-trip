import React from "react";

import {
    Wrapper,
    Article,
    Index,
    Title,
    Done,
    Submit,
} from './Article.style';

export default ({article}) => (
    <Article>
        <Index>{article.id}.</Index>
        <Title>{article.title}</Title>
        {article.isDone ? <Done/> : <Submit>Done</Submit>}
    </Article>
)