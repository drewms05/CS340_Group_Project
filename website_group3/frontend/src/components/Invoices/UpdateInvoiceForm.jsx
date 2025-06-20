// Citation for starter code 
// Date: 06/09/2025
// Code adapted from the bsg files from Exploration - Implementing CUD operations in your app
// Code adapted from the bsg files from Exploration - Web Application Technology
// Code in lines 45-50 (clearing form fields after submit is pressed) adapted from Microsoft Copilot (see UpdateManagerForm.jsx)
// Code in line 106 copied from user Mikel Rychliski on Stack Overflow (URL below)
// URL: https://stackoverflow.com/a/31575897/30652475
// URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
// URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
// URL: https://copilot.microsoft.com

import React, { useState } from 'react';

const UpdateInvoiceForm = ({ invoices, recording_sessions, refreshInvoices, backendURL }) => {

    const [formData, setFormData] = useState({
        update_invoice_ID: '',
        update_invoice_session_ID: '',
        update_invoice_session_cost: '',
        update_invoice_invoice_paid: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the update logic here

        try {
            const response = await fetch(backendURL + '/invoices/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Invoice updated successfully.");
                refreshInvoices();
                setFormData({
                    update_invoice_ID: '',
                    update_invoice_session_ID: '',
                    update_invoice_session_cost: '',
                    update_invoice_invoice_paid: ''
                })
            } else {
                console.error("Error updating invoice.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };
    return (
        <>
        <h2>Update an Invoice</h2>
        <form className='cuForm' onSubmit={handleSubmit}>
            <label htmlFor="update_invoice_ID">Invoice: </label>
            <select
                name="update_invoice_ID"
                id="update_invoice_ID"
                value={formData.update_invoice_ID}
                onChange={handleChange}
                required
            >
                <option value="">Select an Invoice</option>
                {invoices.map((invoice, index) => (
                    <option value={invoice['Invoice ID']} key={index}>{invoice['Invoice ID']}</option>
                ))}
            </select>

            <label htmlFor="update_invoice_session_ID">Recording Session: </label>
            <select
                name="update_invoice_session_ID"
                id="update_invoice_session_ID"
                value={formData.update_invoice_session_ID}
                onChange={handleChange}
                required
            >
                <option value="">Select a Recording Session</option>
                {recording_sessions.map((recording_session, index) => (
                    <option value={recording_session.session_ID} key={index}>{recording_session.session_ID}</option>
                ))}
            </select>

            <label htmlFor="update_invoice_session_cost">Cost: </label>
            <input
                type="number"
                name="update_invoice_session_cost"
                id="update_invoice_session_cost"
                value={formData.update_invoice_session_cost}
                onChange={handleChange}
                required
            />

            <label htmlFor="update_invoice_invoice_paid">Paid: </label>
            <input
                type="number"
                name="update_invoice_invoice_paid"
                id="update_invoice_invoice_paid"
                max='1'
                min='0'
                value={formData.update_invoice_invoice_paid}
                onChange={handleChange}
                required
            />

            <input type="submit" />
        </form>
        </>
    );

} 

export default UpdateInvoiceForm;