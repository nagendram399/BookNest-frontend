import React from 'react'

const FooterComponent = () => {


    return (
        <footer>
            <span className="my-footer">
                BookNest Hotel | All Right Reserved &copy; {new Date().getFullYear()}
            </span>
        </footer>
    );
};

export default FooterComponent;