import React from "react";
import styled from "styled-components";

const Feature = ({title, content}) => {
return (
    <>
<h1>{title}</h1>
<p>{content}</p>
</>
)
}

export default Feature;