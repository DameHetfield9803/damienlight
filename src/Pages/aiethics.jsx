import React from 'react';
import { Document, Page } from 'react-pdf';
const AiEthics = () => {
    const pdfURL = '../assets/AiEthics.pdf';
    return (
        <div>
            <Document file={pdfURL}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};
export default AiEthics;