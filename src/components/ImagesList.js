import './ImagesList.css'
import ImagesShow from "./ImagesShow";

function ImagesList({images}){
    const renderedImages = images.map((image) => {
        return <ImagesShow key = {image.id} image = {image}/>;
    })
    return <div className='image-list'>{renderedImages}</div>;
}


export default ImagesList;



