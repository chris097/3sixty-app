import { useQuery } from "@tanstack/react-query"

const fetchQuery = (key, payload) => {
    const { data, isLoading } = useQuery([key], payload)
    return {
      data,
      isLoading
    }
}

export default fetchQuery;