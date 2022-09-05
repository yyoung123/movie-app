import axios from "axios";
import Movie from "./Movie";
import { useEffect, useState } from "react";
export default function List() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      console.log(res.data);
      setMovies(res.data.results); //상태변화를 감지 무한루프에빠짐
      // useeffect 변수의 상태변화가 감지되면 useeffect함수를 실핸한다.
      // 빈배열을 넣어주면 한번만 실행된다.
    });
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="title">
          <strong>popular movie</strong>
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;
            console.log({ ...item });
            return <Movie movieInfo={item} key={idx} />;
          })}
        </ul>
      </div>
    </>
  );
}
