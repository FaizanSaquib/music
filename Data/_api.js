const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8491dff11emsh89685d764aee9cbp1b9b5fjsn32af0ee4dafe",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

export const worldChart = async () => {
  const fetching = await fetch(
    "https://shazam-core.p.rapidapi.com/v1/charts/world",
    options
  );
  const fetchedData = await fetching.json();
  return fetchedData;
};
export const searchSuggestion = async (search) => {
  const fetching = await fetch(
    `https://shazam-core.p.rapidapi.com/v1/search/suggest?query=${search}`,
    options
  );
  const fetchedData = await fetching.json();
  return fetchedData;
};
export const searchedData = async (search) => {
  const fetching = await fetch(
    `https://shazam-core.p.rapidapi.com/v1/search/multi?query=${search}&search_type=SONGS_ARTISTS`,
    options
  );
  const fetchedData = await fetching.json();
  return fetchedData;
};
export const songDetail = async (songId) => {
  const fetching = await fetch(
    `https://shazam-core.p.rapidapi.com/v1/tracks/details?track_id=${songId}`,
    options
  );
  const fetchedData = await fetching.json();
  return fetchedData;
};
export const songByCountry = async (country) => {
  const fetching = await fetch(
    `https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=${country}`,
    options
  );
  const fetchedData = await fetching.json();
  return fetchedData;
};
export const country = async () => {
  const fetching = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_pI7oWTGjjwPymNAwN0r7aD6ojJB6M`
  );
  const fetchedData = await fetching.json();
  return fetchedData;
};
export const relatedSongs = async (songId) => {
  const fetching = await fetch(`https://shazam-core.p.rapidapi.com/v1/tracks/related?track_id=${songId}`, options)
  const fetchedData = await fetching.json();
  return fetchedData;
};
export const artistDetail = async (artistId) => {
  const fetching = await fetch(`https://shazam-core.p.rapidapi.com/v1/artists/details?artist_id=${artistId}`, options)
  const fetchedData = await fetching.json();
  return fetchedData;
};
