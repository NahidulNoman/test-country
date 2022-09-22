import React from 'react';

const bgColor = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
}

const Country = (props) => {
     console.log(props.country.languages)
    const {name,flags,capital,region,languages} = props.country
    // console.log(Object.values(languages)[0])
    return (
        <div style={bgColor} className="card shadow-lg rounded-4">
                <img src={flags.png} className="card-img-top w-50 mx-auto mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Country : {name.common}</h5>
                    <p className='text-danger'>Capital : {capital}</p>
                    <p className='text-success'>Region : {region}</p>
                    <p>Languages : {languages ? Object.values(languages)[0] : 'no language'}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
          </div>
    );
};

export default Country;