import React from "react";
import { getAllArticles } from "../../services/contentful";
import Article from "./Article.js";
import styled from "styled-components";
import { useState } from "react";

const ArticleFeed = ({store}) => {
const [numArticles, setNumArticles] = useState(6) 
const handleClick = () => {
    setNumArticles(numArticles + 6)
}
return (
<BigBox>
    <Div>
    <Categories>Categories</Categories>
    </Div>
    <Buttons>
        <Button>VIEW ALL</Button>
        <Button>HEALTH AND WELLNESS</Button>
        <Button>FOR ORGANIZATIONS</Button>
        <Button>LIFE AT DIALOGUE</Button>
    </Buttons>
    <Divy>
{store.articles.slice(0, numArticles ? numArticles: store.articles.length).map((blogPost) => {
const article = blogPost;
console.log(article, "posts");
const title = article.fields.title;
const category = article.fields.category;

return (    
<Article title={title} category={category}/>
)

})}
</Divy>
<ButtonHolder>

<LoadMore onClick={handleClick}>Load More</LoadMore>
</ButtonHolder>
</BigBox>
)
}

export default ArticleFeed;

const BigBox = styled.div`
background-color: #F7DFC2;

`
const Categories = styled.h1`
text-align: center;
`
const Div = styled.div`
margin-top: 20px;
margin-bottom: 30px;
position:relative;
`
const Button = styled.button`
background-color: #C2DAF7;
border: none;
border-radius: 20px;
padding: 10px;
margin: 3px;
&:hover{
    background-color: transparent;
    border: solid;
    border-color: #C2DAF7;
}
`
const Buttons = styled.div`
position: relative;
width: 600px;
height: auto;
margin:0 auto;
`
const LoadMore = styled.button`
border:none;
color: #F7DFC2;
background-color: black;
border-radius: 20px;
padding: 15px;
width: 150px;
font-family: 'Playfair Display', serif;
`
const ButtonHolder = styled.div`
position: relative;
width: 200px;
height: auto;
margin:0 auto;
`
const Divy = styled.div`
display: flex;
flex-wrap: wrap;
`