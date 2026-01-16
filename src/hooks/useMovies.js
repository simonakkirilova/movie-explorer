import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      const fakeTitles = [
        "Inception",
        "The Godfather",
        "Titanic",
        "The Dark Knight",
        "Forrest Gump",
        "Pulp Fiction",
        "Gladiator",
        "The Matrix",
        "Interstellar",
        "The Shawshank Redemption"
      ];

      return response.data.slice(0, 10).map((item, idx) => ({
        title: fakeTitles[idx],
        year: 2000 + idx,
        genre: ["Action","Drama","Comedy","Romance","Sci-Fi"][idx % 5],
        plot: item.body,
        image: `https://picsum.photos/100/70?random=${idx}`
      }));
    },
  });
}
