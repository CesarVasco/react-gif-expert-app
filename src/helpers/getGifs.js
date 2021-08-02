export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=UNqeCIcVsApwt9etX7V3aZbp11pyYi0I`;

	const response = await fetch(url);
	const { data } = await response.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img?.images?.downsized_medium.url
		}
	});

	return gifs; //Promesa
};