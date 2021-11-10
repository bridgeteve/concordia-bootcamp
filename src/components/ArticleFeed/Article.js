import React from "react";
import styled from "styled-components";

const Article = ({category, title}) => {
    return (
        <SmallerBox>
            <Image src="https://via.placeholder.com/200x100" alt="health and wellness photo"/>
            <Div>
                <Title>{title}</Title>
                    <Category>{category}</Category>
                    </Div>
        </SmallerBox>
    
    )

}

export default Article;

const Title = styled.h2`
margin-bottom: 100px;
min-height: 64px;
`
const Category = styled.p`

`
const Image = styled.img`
width: 100%;
max-height: 150px;
`
const SmallerBox = styled.div`
display: inline-block;
margin: 30px;
background-color: white;
width: 500px;
height: 375px;
&:hover {
    border:solid;
    border-color: black;
    border-width: 0.5px;
}
`
const Div = styled.div`
margin-left: 20px;

`