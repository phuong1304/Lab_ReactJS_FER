import React from "react";
import { useParams } from 'react-router-dom'
import { data } from "../data/ListOfFilms";
import ReactPlayer from "react-player";

export default function Detail() {
  const userName = useParams();

  const film = data.find(obj => {
    return obj.id == userName.id;
  });
  let view = film.view.toLocaleString();
  return (
    <div className='container-detail'>
      <div className='product-card'>
        <div className='badge'>{film.title}</div>
        <div className='product-tumb'>
          <img src={`../${film.image}`} alt='' />
        </div>
        <div className='product-details'>
          <h4 className='product-title'>{film.title}</h4>
          <div>{film.nation}</div>
          <div className='product-price'>View: {view} people</div>
          <div className='product-info'>{film.information}</div>
          <div className="video">
            <ReactPlayer
              width="700px"
              height="400px"
              url={film.trailer}
              controls
            />
          </div>

        </div>
      </div>
    </div>
  )

}