import React from "react";

import {Wrapper, Header, Logo, Title, Percentage, ArticlesWrapper} from "./Skill.style.js";
import {Left, Right} from '../common.style';

import Article from "../Article/Article.component";

import {ReactComponent as ChevronUp} from "../../icon/chevron-up.svg";

export default ({data = {}}) => {

    const {header, articles = [], style = {}} = data;
    const TOTAL = articles.length;
    const TOTAL_DONE = articles.filter(a => a.isDone).length;
    const percentage = 100 * TOTAL_DONE / TOTAL;
    console.log({header})

    return (
        <Wrapper>
            <Header style={style}>
                <Left>
                    <Logo url={header.logo}/>
                    <Title>{header.title}</Title>
                </Left>
                <Right>
                    <Percentage>{percentage.toFixed(0)}%</Percentage>
                    <ChevronUp style={{width: '20px'}}/>
                </Right>
            </Header>
            <ArticlesWrapper>
                {articles.map(article => <Article article={article}/>)}
                <button>Add article</button>
            </ArticlesWrapper>
        </Wrapper>
    )
}