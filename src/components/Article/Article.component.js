import React from "react";

import {ReactComponent as AddIcon} from '../../icon/add.svg';
import {ReactComponent as CheckmarkIcon} from '../../icon/checkmark.svg';
import {ReactComponent as RemoveIcon} from '../../icon/remove.svg';

import {Article, Index, Title,} from './Article.style';
import {Left, Right} from '../common.style';

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
                        : <input value={article.title}/>
                    }
                </Title>
            </Left>

            {!toggle
                ? <CheckmarkIcon onClick={() => {console.log('ha'); toggleInput();}}  style={style} />
                : article.isDone
                    ? <RemoveIcon style={style}/>
                    : <AddIcon style={style}/>
            }
        </Article>
    )
}