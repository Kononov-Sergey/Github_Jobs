export interface LocationSuggestInfo {
	id: string;
	text: string;
	url: string;
}

export interface GetLocationSuggestsRes {
	items: LocationSuggestInfo[];
}

const GetLocationSuggests = (locationText: string): Promise<GetLocationSuggestsRes> => {
	return fetch(`https://api.hh.ru/suggests/areas?text=${locationText}`).then((res) => res.json());
};

export default GetLocationSuggests;
