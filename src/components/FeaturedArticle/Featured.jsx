import React from "react";
import styled from "styled-components";
import { useStore } from "../../contexts/Store";

const Featured = ({store}) => {
const { getFeaturedArticle} = useStore();
console.log(getFeaturedArticle(), "hello");
const featuredBlogs = getFeaturedArticle();

const Post = featuredBlogs.sort((a, b)=> {
    return  a.fields.date - b.fields.date;
    })
    console.log(Post[0], "hey")
    const title = Post[0].fields.title
    const content = Post[0].fields.content
    console.log(title, "pizz")
    console.log(content, "wtf")

return (
<BigBox>
    <FeatPost>
    <img src="https://via.placeholder.com/300x200" alt="time travelling spaceship"/>
    <Text>
    <Title>{title}</Title>
    <Content>{content}</Content>
    <Read>Read More</Read>
    </Text>
    </FeatPost>
</BigBox>
)
}

export default Featured;

const BigBox = styled.div`
background-color: #FAF9F6;
`
const Text = styled.div`
margin-left: 30px;
`
const FeatPost = styled.div`
display: flex;
`
const Title = styled.h1`
justify-content: left;
`
const Read = styled.p`
margin-top: 20px;
&:hover{
    text-decoration: underline;
    cursor: pointer;
}
`
const Content = styled.p`
margin-top: 1px;
`
