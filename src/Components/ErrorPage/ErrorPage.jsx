import React from 'react'
import { useNavigate } from 'react-router';
import styles from "../ErrorPage/ErrorPage.module.css";
import { Footer } from '../footer/Footer';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/")
    }
    return (
        <>
            <div className={styles.errorpageWrapper}>
                <h1 className={styles.errorpageTitle}>Uh oh,<br/>something broke.</h1>
                <p className={styles.errorpageTitle}>Error 404 - page not found.</p>
                <button className={styles.errorpageButton} onClick={handleRedirect}>Return to Costa Coffee</button>
            </div>
            <Footer/>
        </>
    )
}

export { ErrorPage };
