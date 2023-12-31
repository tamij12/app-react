import React from "react";
import Episode from "../Episode/Episode";
import { useState } from "react";

export default function EpisodeBrowser(props) {
  const { episodes } = props;

  const [activeEpisode, setActiveEpisode] = useState(0);

  const prevEpisode = () => {
    if (activeEpisode > 0) {
      setActiveEpisode(activeEpisode - 1);
    } else {
      alert("no more episodes");
    }
  };

  const nextEpisode = () => {
    if (activeEpisode < episodes.length - 1) {
      setActiveEpisode(activeEpisode + 1);
    } else {
      alert("no more episodes");
    }
  };

  return (
    <React.Fragment>
      <Episode episode={episodes[activeEpisode]} />
      <button onClick={prevEpisode}>Prev</button>
      <button onClick={nextEpisode}>Next</button>
    </React.Fragment>
  );
}
