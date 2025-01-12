import React from "react";
import "./Home.scss";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import Navigation from "../../components/Navigation/Navigation";

// path: /

const Home = ({ userProfile, articles, pathways }) => {
  return (
    <div className="home-container">
      <WelcomeHeader userProfile={userProfile} />
      <SearchContainer title="Pathways" pathwaysLink="/pathways" articles={articles} pathways={pathways} />
      <Navigation />
    </div>
  );
};

export default Home;
