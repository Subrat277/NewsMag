import image from '../assets/default-news.jpg'
const Newsitem = ({title, description, src, url}) => {



  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{maxWidth: "345px", width: "100%", height: "auto"}}>
      <img src={src? src : image} style={{height: "200px", objectFit: "cover"}} className="card-img-top" alt="news image" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News is a report of a current event. It is information about something that has just happened"}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
        
      </div>
    </div>
  );
}

export default Newsitem;
