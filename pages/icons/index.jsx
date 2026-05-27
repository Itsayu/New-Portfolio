import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

// 1. FIXED: Set ssr: false so FontAwesome does not execute looking for 'document' on the server
const Icon = dynamic(
    () => import('../../src/components/utils/icon.tsx'),
    { ssr: false }
);

// 2. FIXED: Changed from dynamic() to standard static import for your SCSS module
import css from '../../src/styles/scss/sections/icons/iconForm.module.scss';
import Section from '../../src/components/structure/section';
import Container from '../../src/components/structure/container';

export default function PageWithJSbasedForm() {
    const [mounted, setMounted] = useState(false);
    const [theIcon, setIcon] = useState({
        prefix: "fad",
        icon: "star",
    });

    // Hydration guard to ensure completely safe client-side execution on Vercel
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
        
        // Get data from the form.
        const data = {
            prefix: event.target.prefix.value,
            icon: event.target.icon.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);
        
        // API endpoint where we send form data.
        const endpoint = '/api/icon-form';
        
        // Form the request for sending data to the server.
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };
        
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);
        const result = await response.json();

        console.log(result);
        setIcon(result);
    };

    const displayIcon = ({ prefix, icon }) => {
        // Return null or fallback placeholder if the component hasn't mounted yet
        if (!mounted) return <div style={{ width: '24px', height: '24px' }} />;
        return <Icon icon={[ prefix, icon ]} />;
    };

    return (
        <Section classProp={`${css.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <form onSubmit={handleSubmit} className={css.form}>
                    <ul>
                        <li>
                            <label htmlFor="prefix">Library</label>
                            <input type="text" id="prefix" name="prefix" required />
                        </li>
                        <li>
                            <label htmlFor="icon">Icon Name</label>
                            <input type="text" id="icon" name="icon" required />
                        </li>
                    </ul>
                    <button className={`${css.button} button`} type="submit">Submit</button>
                </form>
                <div className={css.results}>
                    { displayIcon(theIcon) }
                </div>
            </Container>
        </Section>
    );
}