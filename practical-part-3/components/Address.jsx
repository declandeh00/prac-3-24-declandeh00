import React, { useEffect, useState } from 'react';

const AddressForm = ({ data, addressType }) => {
    const [street, setStreet] = useState(data.street);
    const [city, setCity] = useState(data.city);
    const [postcode, setPostcode] = useState(data.postcode);
    const [country, setCountry] = useState(data.country);

    return (
        <>
            <h3>{addressType} Address</h3>
            <label>Street:</label>
            <input value={street} onChange={(e) => setStreet(e.target.value)}/>
            <label>City:</label>
            <input value={city} onChange={(e) => setCity(e.target.value)}/>
            <label>Postcode:</label>
            <input value={postcode} onChange={(e) => setPostcode(e.target.value)}/>
            <label>Country:</label>
            <input value={country} onChange={(e) => setCountry(e.target.value)}/>
        </>
    );
};

export default AddressForm;
