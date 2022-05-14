import React from "react";

import {Wrapper, Header, Logo, Title, Percentage, ArticlesWrapper, GroupTitle, GroupContainer} from "./Skill.style.js";
import {Left, Right} from '../common.style';

import Article from "../Article/Article.component";
import Icon from "../Icon/Icon.component";
import Button from "../Button/Button.component";

import ChevronUpUrl from "../../icon/chevron-up.svg";

export default ({data = {}}) => {

    const {header, articles = [], style = {}} = data;
    let tot = [];
    articles.forEach(a => tot = [...tot, ...a.list]);

    const TOTAL = tot.length;
    const TOTAL_DONE = tot.filter(a => a.isDone).length;
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
                    <Icon url={ChevronUpUrl}/>
                </Right>
            </Header>
            <ArticlesWrapper>
                {
                    articles.map(({group_title, list}) => (
                            <React.Fragment>
                                <GroupContainer>
                                    <GroupTitle key={group_title}>{group_title}</GroupTitle>
                                    <Icon url={ChevronUpUrl}/>
                                </GroupContainer>
                                {
                                    // list.find(article => article.isDone)
                                    //     ? <div></div>
                                    //     :
                                    list.map(article => <Article key={article.title} article={article}/>)
                                }
                            </React.Fragment>
                        )
                    )
                }
                <input onChange={() => {
                }} placeholder={'Enter skills name'}/>
                <Button>Add article</Button>
            </ArticlesWrapper>
        </Wrapper>
    )
}