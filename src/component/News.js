import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './spinner';
import Footer from './Footer';

export default class News extends Component {
    article = [];    //this is the intial value we set to display later we changing the same using useState (using actual api data)
    
    
    constructor(props) {
        super(props);
        document.title=`Newsify   |   ${this.props.category}` //title of the page 
        this.state = {
            article: this.article,
            loading: false,
            page: 1,
            hasNextPage: true // Initialize hasNextPage state
            
        };
    }

   async componentDidMount(){  
    this.setState({loading:true})    //for spinner turning loading on
    this.props.setprogress(10)      // for top progress bar like youtube
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=18&category=${this.props.category}&apiKey=${this.props.apikey}`
    let data = await fetch(url)
    let parseddata= await data.json()
    this.setState({loading:false})      //to stop the spinner
    console.log(parseddata)
    this.props.setprogress(100)     //to set the top progress bar 100%
    this.setState({ 
            article: parseddata.articles,  //fetched api data(parseddata.articles) is assigning to article set which wa empty array previously (line 7)
            hasNextPage: true
        }); // Update article state and hasNextPage state

    }

    //same logic like previos for next button onclick (incrementing page by 1)
 next = async () => {
    console.log("clicked on next")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=18&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}`;
    // console.log(this.state.page, " ssss ", this.state.page + 1);
    this.setState({loading:true})
    let data = await fetch(url);
    let parseddata1 = await data.json();
    console.log(parseddata1);
    this.setState({loading:false})
    if (parseddata1.articles.length > 0) {
        this.setState(prevState => ({
            page: prevState.page + 1,
            article: parseddata1.articles,
            hasNextPage: true
        }));
    } else {
        this.setState({ hasNextPage: false }); // No more pages available, disable hasNextPage
    }
};

 //same logic like previos for previous b button onclick (decrementing page by 1)
prev = async () => {
    console.log("clicked on previous")
    if (this.state.page > 1) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=18&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}`;
        console.log(this.state.page, " ssss ", this.state.page - 1);
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata1 = await data.json();
        console.log(parseddata1);
        this.setState({loading:false}) 
        this.setState(prevState => ({
            page: prevState.page - 1,
            article: parseddata1.articles,
            hasNextPage: true
        }));
    }
};

    render() {
        return (
            <>
            {/* //in below block we sending the api fetched data to news item componnet  */}
                <div className='container my-4 py-5'>
                <h2 className='text-center'>Newsify - Top <strong>{this.props.category}</strong> Headlines</h2>
                    <div className="row">
            {/* using array.map to iterate the data ...bcz we have render all cards with proper data in it*/}
                        {this.state.article.map((elem, index) => (
                            <div className="col-md-4" key={index}>
                                <NewsItems 
                                    title={elem.title ? elem.title.slice(0, 44) : ""} 
                                    description={elem.description ? elem.description.slice(0, 85) : ""} 
                                    imageurl={elem.urlToImage ? elem.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0406%2Fr1314944_2_1296x729_16%2D9.jpg"}  
                                    newsurl={elem.url}
                                    author={elem.author? elem.author:" Unknown"}
                                    publishedAt={elem.publishedAt? elem.publishedAt:"1 day ago"}
                                    source={elem.source.name}
                                    />
                            </div>
                        ))}
                    </div>
                </div>
{/* if this.state.loading is true then render spinner component or not */}
                {this.state.loading && <Spinner/>}
{/* prev and next buttons */}
                <div className="container d-flex justify-content-between pb-5">
                    <button disabled={this.state.page <= 1} onClick={this.prev} type="button" className="btn btn-primary ">&larr; Previous</button>
                    <button onClick={this.next} type="button" className="btn btn-primary  " disabled={!this.state.hasNextPage}>Next &rarr;</button>
                </div>

                <Footer/>
            </>
        );
    }
}
