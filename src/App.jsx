import { Component, useState } from "react";
import "./App.css";
import SearchBar from "./components/search";
import Gallery from "./components/imagegallery";
import { fetchImages } from "./utils/pixabay";

class App extends Component {
  state = {
    imagesData: null,
  };
  onSubmit = async (entry) => {
    try {
      const imagesData = await fetchImages(entry);
      console.log("Fetching images for ", entry);
      console.log("Successfully fetched Images.");
      this.setState({ imagesData });
    } catch (error) {
      console.error("Error fetching Images: ", error);
    }
  };
  render() {
    return (
      <div className="flex flex-col">
        <SearchBar onSubmit={this.onSubmit} />
        <Gallery imagesData={this.state.imagesData} />
      </div>
    );
  }
}

export default App;
