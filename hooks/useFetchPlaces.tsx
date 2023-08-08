import useSWR from "swr";
import { useEffect } from "react";
import { mockData } from "./mockdata";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function useFetchPlaces(place, cache) {
  console.log();

  // if (cache) return;

  // const url = `https://restapi.amap.com/v3/place/text?keywords=${place}&city=010&offset=30&page=1&key=760705e2aa6dfb272a28ee34cd725092&extensions=all`;
  const { data, error, isLoading } = useSWR("api/hello", fetcher);
  console.log("swr data", data);
  return {
    data: mockData,
    // error,
    // isLoading,
  };
}
