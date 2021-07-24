import React, { useEffect } from "react";
import { Images, ImageDetails, Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useGlobalContext } from "./globalContext";
import { apiEndpoint } from "./config";
import axios from "axios";

function App() {
  // Fetching all images on load starts
  const { setAllImages, setIsLoading } = useGlobalContext();

  const savedDarkTheme =
    localStorage.getItem("darkTheme") === "true" ? true : false;
  if (savedDarkTheme) {
    document.documentElement.className = "dark-theme";
  } else {
    document.documentElement.className = "light-theme";
  }

  let images;
  const fetchAllImages = async (url) => {
    setIsLoading(true);
    const response = await axios({ url });
    images = response.data.data.children.map(({data}) => data);
    console.log(images);
    setAllImages(images);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllImages(apiEndpoint);
  }, [apiEndpoint]);
  // Fetching all images on load ends

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Images />
          </Route>
          <Route exact path="/:image">
            <ImageDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
