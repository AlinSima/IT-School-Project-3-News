import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 3);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 3);
  const gamesNewsEndpoint = getNewsCategoriesEndpoint("games", 1, 3);
  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  let gamesData = useFetch(gamesNewsEndpoint);
  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);
  const adaptedGamesData = getNewsList(gamesData);

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            See all technology news in the section{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="football my-5">
        <Container>
          <h1 className="mb-5 pt-3">Football</h1>
          <NewsCardList newsList={adaptedFootballData} />
          <p>
            See all the football news in the section{" "}
            <Link to="/category/football" className="text-secondary">
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="games my-5">
        <Container>
          <h1 className="mb-5 pt-3">Games</h1>
          <NewsCardList newsList={adaptedGamesData} />
          <p>
            See all games news in the section{" "}
            <Link to="/category/games" className="text-secondary">
              Games
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorites</h1>
          <p>Want to save your favorite news to read later ?</p>
          <p>
            In each news item you will find a button to add your favorite news.
          </p>
          <p className="pb-3">
            Visit the section{" "}
            <Link to="/favorites" className="text-secondary">
              Favorites
            </Link>{" "}
            to view your saved news.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
