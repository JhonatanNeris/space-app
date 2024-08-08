import React from 'react'

import tags from './tags.json'
import styled, {css} from 'styled-components'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    ${({ isselected }) =>
        isselected &&
        css`
            background: #C98CF1;
            color: #FFFFFF;
            border-color: #C98CF1;
        `
    }
`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`
const Tags = ({ setTags, selectedTag }) => {

    return (
        <TagsContainer>
            <TagTitle>Busque por tags:</TagTitle>
            <Div>
                {tags.map(tag => (
                    <Tag
                        key={tag.id}
                        onClick={() => setTags(tag.tag)}
                        isselected={selectedTag === tag.tag}
                    >
                        {tag.titulo}
                    </Tag>
                ))}
            </Div>
        </TagsContainer>
    )
}

export default Tags