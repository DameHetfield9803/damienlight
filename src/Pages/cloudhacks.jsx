import React from 'react';
import { Document, Page } from 'react-pdf';
const damienCloudhacks = () => {
    const pdfURL = '../assets/damienCloudhacks.pdf';
    return (
        <div>
            <Document file={pdfURL}>
                <Page pageNumber={2} />
            </Document>
        </div>
    );
};
export default damienCloudhacks;