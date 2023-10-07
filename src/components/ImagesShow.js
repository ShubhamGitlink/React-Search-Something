
function ImagesShow({image}){
    // return <div>{image.alt_description}</div>
    return <div>
      <img src={image.urls.small} alt={image.alt_description}/>
    </div>
  }
  
         
  export default ImagesShow;