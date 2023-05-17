import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { nanoid } from 'nanoid';
import Card from './Uİ/Card';
import Context from '../Context/Context';
import Loading from '../Components/Loading'


function Carusel({dataUrl}) {
const [loading,setLoading]=useState(true)
    const [mydata, setMydata] = useState([])
    useEffect(() => {
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {setMydata(data.results)
            setTimeout(() => {
                setLoading(false)
            }, 550)
        })
    }, [dataUrl])


    const { search } = useContext(Context)


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2.1,
            slidesToSlide: 1
        }
    };


    const myMap = mydata.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item) =>loading ? <Loading key={nanoid()}/> : <Card key={nanoid()} {...item} />)
    return (
        <div className=''>
            <Carousel className='' responsive={responsive} draggable={true} swipeable={true} infinite={true} keyBoardControl={true} removeArrowOnDeviceType={["tablet", "mobile"]} transitionDuration={500}>
                {myMap}
            </Carousel>;

        </div>
    )
}
// swipeable={false}
// draggable={false}
// showDots={true}
// responsive={responsive}
// ssr={true} // means to render carousel on server-side.
// infinite={true}
// autoPlay={this.props.deviceType !== "mobile" ? true : false}
// autoPlaySpeed={1000}
// keyBoardControl={true}
// customTransition="all .5"
// transitionDuration={500}
// containerClass="carousel-container"
// removeArrowOnDeviceType={["tablet", "mobile"]}
// deviceType={this.props.deviceType}
// dotListClass="custom-dot-list-style"
// itemClass="carousel-item-padding-40-px"

export default Carusel