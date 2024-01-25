import { useQuery } from "react-query";

import getProjects from "@/actions/getProjects";

const SearchQuery = (searchValue: string, setResult: Function) => {
	return useQuery(["search", searchValue], async () => {
		const result = await getProjects({
			search: searchValue,
			items: 10,
		});
		const filteredCount = result.total;
		const filteredData = result.result;
		setResult(filteredData);
		return { filteredData, filteredCount };
	});
};

export default SearchQuery;
