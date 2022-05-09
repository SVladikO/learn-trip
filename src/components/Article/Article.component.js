import React from "react";

import AddIconUrl from '../../icon/add.svg';
import CheckmarkIconUrl from '../../icon/checkmark.svg';
import RemoveIconUrl from '../../icon/remove.svg';

import Icon from '../Icon/Icon.component';

import {Article, Index, Title, Input} from './Article.style';
import {Left} from '../common.style';

const style = {
    height: '18px',
    width: '20px',
}

export default ({article}) => {
    const [toggle, setToggle] = React.useState(true);

    const toggleInput = () => setToggle(!toggle);

    return (
        <Article>
            <Left>
                <Index>{article.id}.{' '}</Index>
                <Title onDoubleClick={toggleInput}>
                    {toggle
                        ? article.title
                        : <React.Fragment>
                            <Input value={article.title} onChange={() => {}} />
                            <Icon url={CheckmarkIconUrl} onClick={toggleInput} style={style} />
                        </React.Fragment>
                    }
                </Title>
            </Left>

            {article.isDone
                    ? <Icon url={RemoveIconUrl} onClick={() => console.log(`${article.title} was undone`)}/>
                    : <Icon url={AddIconUrl} onClick={() => console.log(`${article.title} was done`)}/>
            }
        </Article>
    )
}