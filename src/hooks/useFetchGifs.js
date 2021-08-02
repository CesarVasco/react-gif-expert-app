import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
	const [state, setstate] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		getGifs(category).then(images => {
			setstate({
				data: images,
				loading: false
			});
		})
		.catch(error => {
			console.error(error);
			setstate({
				data: state.data,
				loading: false
			})
		});
	});

	return state;
}