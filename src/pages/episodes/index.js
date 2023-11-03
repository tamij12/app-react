import React from "react";
import EpisodeBrowser from "../../components/EpisodeBrowser/EpisodeBrowser";

export default function Episodes() {
    const episodeArray = [
        {
            nmae: "Piloto los simpsons1",
            air_date: "December 17, 1989",
            episode: "S01E01",
            cover_img: "https://image.tmdb.org/t/p/original/xokeqqBWmtkZFNH0GXxHOVrkQ4c.jpg",
        },
        {
            nmae: "Piloto los simpsons2",
            air_date: "December 18, 1989",
            episode: "S01E01",
            cover_img: "https://th.bing.com/th/id/OIP.46OHWBr2UGnYAtPhPdpeQgAAAA?pid=ImgDet&rs=1"
        },
        {
            nmae: "Piloto los simpsons3",
            air_date: "December 19, 1989",
            episode: "S01E01",
            cover_img: "https://th.bing.com/th/id/R.d6567cbea1ef1391ed7bfb0eaeca347c?rik=3%2fZorcFKZkm4ow&pid=ImgRaw&r=0"
        },
        {
            nmae: "Piloto los simpsons4",
            air_date: "December 20, 1989",
            episode: "S01E01",
            cover_img: "https://i.pinimg.com/736x/a3/99/fb/a399fb7ed7f01028000cbfba6b6f9d1c.jpg"
        }
        
    ];
  return <EpisodeBrowser episodes = {episodeArray}/>;
}
