import React from 'react';
import ParticleComponent from '../components/Particle';
import { Document, Page, pdfjs } from "react-pdf";
import { Link } from 'react-router-dom';
import resumepdf from '../media/raavicresume.pdf';
import home from '../media/home.png';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return (
        <div className='Resume'>
            <br />
            <img src={home} alt={"HOME ICON"} width={20} />
            <br />
            <Link to={'/home'}>
                <button>HOME</button>
            </Link>
            <br />
            <br />
            <br />
            <div className={"resumePDF"}>
                <Document file={resumepdf}>
                    <Page pageNumber={1} />
                </Document>
            </div>
            <ParticleComponent />
        </div>
    );
}

export default Resume;