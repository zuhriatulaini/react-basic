import React from "react";

class MovieCard extends React.Component{

    render(){
        return (
        <div>
          <div className="col-6 my-3">
            <div class="card h-100">
              <img
                // src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f"
                src={this.props?.movie?.image_url}
                class="card-img-top"
                alt="skilvul"
              />
              <div class="card-body">
                {/* <h5 class="card-title">Fullmetal Alchemist: Brotherhood</h5> */}
                <h5 class="card-title">{this.props?.movie?.title}</h5>
                <h6 class="card-subtitle mb-2">
                  {/* <span class={`badge bg-danger`}>TV</span> */}
                  <span class={`badge ${this.props?.movie?.type === 'TV'? 'bg-danger' : 'bg-success'} `}>{this.props?.movie?.type}</span>

                </h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <div class="card-body">
                <a
                  href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
                  class="btn btn-primary w-100 text-uppercase"
                >
                  readmore
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 my-3">
            <div class="card h-100">
              <img
                src="https://cdn.myanimelist.net/images/anime/1245/116760.jpg?s=8f52d6ff46ef1233eb9fcd542434221c"
                class="card-img-top"
                alt="skilvul"
              />
              <div class="card-body">
                <h5 class="card-title">Gintama: The Final</h5>
                <h6 class="card-subtitle mb-2">
                  <span class={`badge bg-success`}>MOVIE</span>
                </h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <div class="card-body">
                <a
                  href="https://myanimelist.net/anime/39486/Gintama__The_Final"
                  class="btn btn-primary w-100 text-uppercase"
                >
                  readmore
                </a>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default MovieCard;