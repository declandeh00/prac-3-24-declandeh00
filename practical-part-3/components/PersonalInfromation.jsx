import React, { useState } from 'react';

const PersonalInfo = (data) => {
    const [firstName, setFirstName] = useState(data.data.firstName);
    const [middleName, setMiddleName] = useState(data.data.middleName);
    const [lastName, setLastName] = useState(data.data.lastName);
    const [phone, setPhone] = useState(data.data.phone);
    const [cellPhone, setCellPhone] = useState(data.data.cellPhone);
    const [email, setEmail] = useState(data.data.cellPhone);
    const [dateOfBirth, setDateOfBirth] = useState(data.data.dateOfBirth);
    const [nationality, setNationality] = useState(data.data.nationality);
    const [avatar, setAvatar] = useState(data.data.avatar);
    const [dietaryInformation, setDietaryInformation] = useState(data.data.dietaryInformation);
    const [medicalInformation, setMedicalInformation] = useState(data.data.medicalInformation);

    return (
        <>
            <label>First Name:</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label>Middle Name:</label>
            <input value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
            <label>Last Name:</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <label>Phone:</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label>Cellphone:</label>
            <input value={cellPhone} onChange={(e) => setCellPhone(e.target.value)}/>
            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Date of Birth:</label>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
            <label>Nationality:</label>
            <input value={nationality} onChange={(e) => setNationality(e.target.value)}/>
            <label>Avatar:</label>
            <div>
                <img src={data.data.avatar} alt="Avatar"/>
                <input value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
            </div>
            <label>Dietary Information:</label>
            <input value={dietaryInformation} onChange={(e) => setDietaryInformation(e.target.value)}/>
            <label>Medical Information:</label>
            <input value={medicalInformation} onChange={(e) => setMedicalInformation(e.target.value)}/>
        </>
    );
};

export default PersonalInfo;
