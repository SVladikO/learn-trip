import React from "react";

import {ReactComponent as AddIcon} from '../../icon/add.svg';
import {ReactComponent as CheckmarkIcon} from '../../icon/checkmark.svg';
import {ReactComponent as RemoveIcon} from '../../icon/remove.svg';

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
                            <CheckmarkIcon onClick={() => toggleInput}  style={style} />
                        </React.Fragment>
                    }
                </Title>
            </Left>

            {article.isDone
                    ? <RemoveIcon style={style}/>
                    : <AddIcon style={style}/>
            }
        </Article>
    )
}