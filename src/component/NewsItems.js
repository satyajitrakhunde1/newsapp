import React, { Component } from 'react'

export default class NewsItems extends Component {
 


  render() {
//accepting tha data as a props from news component so we can show it through card
    let {title,description,imageurl,newsurl,publishedAt,author,source}=this.props //accepting props form news.js
    return (
      <>
      <div className="container my-3 position-relative">
      <div className="card"  >
  <img className="card-img-top" src={imageurl} alt="oops!!! source file is removed by owner"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5><span className="badge rounded-pill bg-light text-dark ">{source}</span>
    <p className="card-text">{description} </p>
    <p className="card-text"><small className="text-muted">{"by "+ author+" on "}{new Date(publishedAt).toGMTString()}</small></p>    <a href={newsurl} rel="noopener noreferrer" target='_blank' className="btn btn-sm btn-primary ">Read More</a>
  </div>
</div>
      </div>
      </>
    )
  }
}
