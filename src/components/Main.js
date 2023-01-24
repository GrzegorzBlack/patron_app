import React, { useContext } from "react";

import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import ArticleCard from "./Card";
import Header from "./Header/Header";
import HistorySlider from "./HistorySlider";

import { SearchParamsContext } from "../contexts/SearchParamsContext";

const useStyles = makeStyles({
  MainContainer: {
    paddingTop: "20px",
  },
  NoSearchMessage: {
    marginTop: "200px",
    textAlign: "center",
    width: "100%",
  },
});

const MainContent = () => {
  const classes = useStyles();
  const [searchParams] = useContext(SearchParamsContext);

  const renderCards = () => {
    return searchParams.results.map((page) => {
      const { id } = page;

      return (
        <Grid item container justifyContent="center" xs={12} sm={4} key={id}>
          <ArticleCard oneCard={page} />
        </Grid>
      );
    });
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Grid container spacing={4} className={classes.MainContainer}>
            {searchParams.results.length ? (
              renderCards()
            ) : (
              <div className={classes.NoSearchMessage}>
                No search results
                <br />
                Type your fraze in search input
              </div>
            )}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <HistorySlider />
    </Grid>
  );
};

export default MainContent;
