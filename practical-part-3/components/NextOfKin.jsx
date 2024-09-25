import React, { useState } from 'react';
import AddressForm from './Address';

const NextOfKin = ({ data, kinType }) => {
    const [name, setName] = useState(data.name);
    const [phone, setPhone] = useState(data.phone);
    const [cellPhone, setCellPhone] = useState(data.cellPhone);
    const [email, setEmail] = useState(data.email);

    return (
        <>
            <h3>{kinType}</h3>
            <label>Full Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Phone:</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label>Cellphone:</label>
            <input value={cellPhone} onChange={(e) => setCellPhone(e.target.value)}/>
            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <AddressForm addressType={kinType} data={data.address}/>
        </>
    );
};

export default NextOfKin;
