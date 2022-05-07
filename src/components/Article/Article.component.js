import React from "react";

import {ReactComponent as AddIcon} from '../../icon/add.svg';
import {ReactComponent as RemoveIcon} from '../../icon/remove.svg';
import {ReactComponent as Checkmark} from '../../icon/checkmark.svg';

import {
    Article,
    Index,
    Title,
} from './Article.style';

const style = {
    height: '18px',
    width: '20px',
}

export default ({article}) => (
    <Article>
        <Title>
            <Index>{article.id}.{' '}</Index>
            {article.title}
        </Title>
        {article.isDone
            ? <Checkmark style={style} />
            // ? <RemoveIcon style={style}/>
            : <AddIcon style={style}/>
        }
    </Article>
)