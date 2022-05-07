import React from "react";

import {
    Wrapper,
    Header,
    Logo,
    Title,
    Percentage,
    SwitchButton,
    ArticlesWrapper
} from "./Skill.style.js";
import Article from "../Article/Article.component";

export default ({data={}}) => {

    const percentage = 100;
    const {header, articles = [], style={}} = data;
    console.log({header})

    return (
        <Wrapper>
            <Header style={style}>
                <Logo url={header.logo}/>
                <Title>{header.title}</Title>
                <Percentage>{percentage}%</Percentage>
                <SwitchButton/>
            </Header>
            <ArticlesWrapper>
                {articles.map(article => <Article article={article}/>)}
            </ArticlesWrapper>
        </Wrapper>
    )
}