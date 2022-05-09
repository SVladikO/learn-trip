import React from "react";

import {Wrapper, Header, Logo, Title, Percentage, ArticlesWrapper} from "./Skill.style.js";
import {Left, Right} from '../common.style';

import Article from "../Article/Article.component";
import Icon from "../Icon/Icon.component";
import Button from "../Button/Button.component";

import ChevronUpUrl from "../../icon/chevron-up.svg";

export default ({data = {}}) => {

    const {header, articles = [], style = {}} = data;
    const TOTAL = articles.length;
    const TOTAL_DONE = articles.filter(a => a.isDone).length;
    const percentage = 100 * TOTAL_DONE / TOTAL;

    return (
        <Wrapper>
            <Header style={style}>
                <Left>
                    <Logo url={header.logo}/>
                    <Title>{header.title}</Title>
                </Left>
                <Right>
                    <Percentage>{percentage.toFixed(0)}%</Percentage>
                    <Icon url={ChevronUpUrl} />
                </Right>
            </Header>
            <ArticlesWrapper>
                {articles.map(article => <Article key={article.id} article={article}/>)}
                <input onChange={() => {}} placeholder={'Enter article name'}/>
                <Button>Add article</Button>
            </ArticlesWrapper>
        </Wrapper>
    )
}