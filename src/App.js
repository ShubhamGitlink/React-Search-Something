import {useState}from 'react'
import SearchBar from './components/SearchBar';
import SearchImages from './Api';
import ImagesList from './components/ImagesList';



const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term)=>{
    const result= await SearchImages(term);
    console.log(result);
    setImages(result);
  }
  return (
    <div>
     <SearchBar onSubmit={handleSubmit}/>
     <ImagesList images= {images}/>
     
     
    </div>
  )
}

export default App;