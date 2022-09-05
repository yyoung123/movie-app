import axios from "axios";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
export default function List() {
  const query = "avengers";
  const [movies, setMovies] = useState([]);
  console.log(useLocation());
  const location = useLocation();
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie; //ignoreQueryPrefix: 물음표무시하기
  // console.log(searchMovie);
  // const test = qs.parse(location.search, { ignoreQueryPrefix: true }).movie;
  // console.log("test===", test);
  // useLocation()에 있는 search에 query string 정보가 들어가 있음.

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1&query=${searchMovie}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results); //상태변화를 감지 무한루프에빠짐
      // useeffect 변수의 상태변화가 감지되면 useeffect함수를 실핸한다.
      // 빈배열을 넣어주면 한번만 실행된다.
      // state가 바꼈을때 실행하는 함수
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
