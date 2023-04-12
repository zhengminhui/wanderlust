import useSWR from "swr";
import { mockData } from "./mockdata";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useFetchPlaces(place) {
  // const url = `https://restapi.amap.com/v3/place/text?keywords=${place}&city=010&offset=30&page=1&key=760705e2aa6dfb272a28ee34cd725092&extensions=all`;
  // const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data: mockData,
    // error,
    // isLoading,
  };
}
