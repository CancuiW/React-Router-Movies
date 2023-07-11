//方法1，用useNavigate Hook去设定URL的endpoint的值

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// export default function MovieList(props) {
//   const navigate=useNavigate()
//   const onClickNavi=id=>()=>{
//     navigate(`/movies/${id}`)
//   }
//   return (
//     <div className="movie-list">
//       {props.movies.map(movie => (
//         <MovieDetails key={movie.id} movie={movie} onClickNavi={onClickNavi(movie.id)} />
//       ))}
//     </div>
//   );
// }

// function MovieDetails(props) {
//   const { title, director, metascore } = props.movie;
//   const { onClickNavi }=props
//   //console.log(props)
//   return (
//     <div className="movie-card" onClick={onClickNavi}>
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//     </div>
//   );
// }

//方法2，用Link 来设定URL中endpoint的值
import React from 'react';
import { Link } from 'react-router-dom';
export default function MovieList(props) {
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        
        <MovieDetails key={movie.id} movie={movie} link={<Link to={`movies/${movie.id}`}>details</Link>} />
       
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const {link}=props
  //console.log(props)
  return (
    <div className="movie-card" >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {link}
    </div>
  );
}

