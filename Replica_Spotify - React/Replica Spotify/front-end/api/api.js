import axios from "axios";

const url = "http://localhost:3000";

const responseArtists = await axios.get(`${url}/artists`);
const responseSongs = await axios.get(`${url}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;