import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store"; 
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/FeaturedArticle/Featured";
import ArticleFeed from "./components/ArticleFeed/ArticleFeed";
import styled from "styled-components";

function App() {
  const store = useStore();
  
  console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />
        <Container>
          <Blog>Blog</Blog>
          <Featured store={store}/>
          <ArticleFeed store={store}/>
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;

const Blog = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`

