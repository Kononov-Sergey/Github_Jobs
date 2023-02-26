export interface GetVacanciesRes {
	per_page: number;
	items: VacancyInfo[];
	page: number;
	pages: number;
	found: number;
	clusters: null;
	arguments: null;
}

export interface VacancyInfo {
	salary: VacancySalary;
	name: string;
	insider_interview: VacancyInsiderInterview;
	area: VacancyArea;
	url: string;
	published_at: string;
	relations: any[];
	employer: VacancyEmployer;
	contacts: VacancyContacts;
	response_letter_required: boolean;
	address: VacancyAddress | null;
	sort_point_distance: number;
	alternate_url: string;
	apply_alternate_url: string;
	department: VacancyAdditionalInfo;
	type: VacancyAdditionalInfo;
	id: string;
	has_test: boolean;
	response_url: null;
	snippet: VacancySnippet;
	schedule: VacancySchedule;
	counters: VacancyCounters;
}

export interface VacancyAdditionalInfo {
	id: string;
	name: string;
}

export interface VacancyAddress {
	city: string;
	street: string;
	building: string;
	description: string;
	lat: number;
	lng: number;
	metro_stations: VacancyMetroStation[];
}

export interface VacancyMetroStation {
	station_id: string;
	station_name: string;
	line_id: string;
	line_name: string;
	lat: number;
	lng: number;
}

export interface VacancyArea {
	url: string;
	id: string;
	name: string;
}

export interface VacancyContacts {
	name: string;
	email: string;
	phones: VacancyPhone[];
}

export interface VacancyPhone {
	country: string;
	city: string;
	number: string;
	comment: null;
}

export interface VacancyCounters {
	responses: number;
}

export interface VacancySchedule {
	id: 'fullDay' | 'shift' | 'flexible' | 'remote' | 'flyInFlyOut';
	name: string;
}

export interface VacancyEmployer {
	logo_urls: VacancyLogoUrls | null;
	name: string;
	url: string;
	alternate_url: string;
	id: string;
	trusted: boolean;
}

export interface VacancyLogoUrls {
	'90': string;
	'240': string;
	original: string;
}

export interface VacancyInsiderInterview {
	id: string;
	url: string;
}

export interface VacancySalary {
	to: null;
	from: number;
	currency: string;
	gross: boolean;
}

export interface VacancySnippet {
	requirement: string;
	responsibility: string;
}

const GetVacancies = (searchText: string): Promise<GetVacanciesRes> => {
	return fetch(`https://api.hh.ru/vacancies?text=${searchText}`).then((res) => res.json());
};

export default GetVacancies;
