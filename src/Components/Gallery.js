import React from 'react';

import Photo from './Photo'; 
import NotFound from './NotFound';

const Gallery = (props) => {
        let photoData = props.photos;
        console.log(photoData); 
        let photoList; 
         
        if (photoData.length > 0) {
          photoList = photoData.map( photo => 
            <Photo 
              key={photo.id}
             url = {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            /> 
            );

        } else {
            photoList = <NotFound/>
        }
        return (

            <div className="photo-container"><ul>{photoList}</ul></div>
            
        );

    

}

export default Gallery;