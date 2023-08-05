import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Error from './Error';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        catrgoty: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        catrgoty: PropTypes.string
    }

    capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }

        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`
    }

    async updateNews() {

        this.setState({ loading: true })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc0e29bed4dd4fdba41cd87139b98053&page=${this.state.page}&pageSize=${this.props.pageSize}`
        const data = await fetch(url);
        const parsedData = await data.json();
        console.log(parsedData);
        if (parsedData.status === 'ok') {

            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            })
        }
    }

    async componentDidMount() {
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()


    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc0e29bed4dd4fdba41cd87139b98053&page=${this.state.page}&pageSize=${this.props.pageSize}`
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };

    render() {
        if (this.state.totalResults === 0) {
            return (<Error />)
        }
        else {
            return (
                <>
                    <h1 className='text-center' style={{ margin: '40px 0px' }}>Top News from {this.capitalize(this.props.category)} category</h1>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title} description={element.description ? element.description.slice(0, 80) + '...' : null} imgUrl={element.urlToImage ? element.urlToImage : "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"}
                                            url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>

                </>
            )
        }
    }
}

export default News