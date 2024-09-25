import React, { useEffect, useState } from 'react';
import './App.css';
import PersonalInfo from '../components/PersonalInfromation';
import AddressForm from '../components/Address';
import NextOfKin from '../components/NextOfKin';

const App = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://applicants-app.onrender.com/data");
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false); 
            }
        };
        fetchData();
    }, []);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            setShowError(true);
        } else {
            window.location.reload();
        }
    };

    const closeErrorPopup = () => {
        setShowError(false);
    };

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Course Application Information</h1>
            <form onSubmit={handleSubmit}>
                <PersonalInfo data={data} />
                <AddressForm data={data.homeAddress} addressType="Home" />
                <AddressForm addressType="Postal" data={data.postalAddress} />
                <NextOfKin kinType="Primary Next of Kin" data={data.primaryNextOfKin} />
                <NextOfKin kinType="Secondary Next of Kin" data={data.secondaryNextOfKin} />
                <label class="checkbox">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange} 
                    />
                    True and accurate
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
            {showError && (
                <div className="error-popup">
                    <div className="error-content">
                        <p>You must agree to the terms by checking the checkbox before submitting.</p>
                        <button onClick={closeErrorPopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
