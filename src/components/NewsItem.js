
const NewsItem = (props) => {

    let { title, description, imgUrl, url, author, date, source } = props;
    return (
        <div className=' my-3'>
            <div className="card" >
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} {new Date(date).toGMTString()}</small></p>
                    <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    <span className="badge bg-success float-end">{source}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsItem