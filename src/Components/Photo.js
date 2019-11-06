import React from 'react';

const Photo = (props) => {
    // import results in the url
    return (
        <li>
         <img src={props.url} alt="logo"></img>
        </li>
   );
}
export default Photo;