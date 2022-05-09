import React from 'react';

import {Wrapper} from './Icon.style';

export default ({url, onClick}) => {
    return (
        <Wrapper url={url} onClick={onClick}></Wrapper>
    );
};