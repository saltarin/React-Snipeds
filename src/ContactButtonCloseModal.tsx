import * as React from 'react';

import styled from 'styled-components';
import { 
    Img as NormalizedImg
} from 'normalized-styled-components';

const TagContainerButtonClose = styled.div`
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    padding: 10px 12px 0px;
    display: flex;
    justify-content: flex-end;
`;

const TagButtonClose = styled(NormalizedImg)`
    display: inline-block;
    font-family: Icons-webfont;
    font-size: inherit;
    font-weight: 400;
    text-decoration: inherit;
    text-transform: none;
    vertical-align: middle;
    width: 25px;
    height: 25px;
    color: #000;
    word-wrap: break-word;
    text-align: center;
    cursor: pointer;
`;

interface Props {
    onClickCloseModal: any;
}

export const ContactButtonCloseModal = (props: Props) => {
    return (
        <TagContainerButtonClose>
            <TagButtonClose onClick={props.onClickCloseModal}/>
        </TagContainerButtonClose>
    )
}