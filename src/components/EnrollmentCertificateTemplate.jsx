import React, { forwardRef } from 'react';

const EnrollmentCertificateTemplate = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} style={{ 
        fontFamily: "Arial, sans-serif", 
        lineHeight: 1.6, 
        padding: '50px', 
        color: '#333',
        backgroundColor: 'white',
        width: '800px',
        minHeight: '1000px',
        boxSizing: 'border-box'
    }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
            {data.universityLogo ? (
                <img src={data.universityLogo} alt="Logo" style={{ 
                    width: '70px', height: '70px', marginRight: '20px',
                    objectFit: 'contain', display: 'block'
                }} />
            ) : (
                <div style={{ 
                    width: '70px', height: '70px', marginRight: '20px',
                    backgroundColor: '#333', borderRadius: '5px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 'bold'
                }}>
                    LOGO
                </div>
            )}
            <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0', color: '#333' }}>{data.universityName}</h1>
                <div style={{ fontSize: '14px', color: '#666' }}>Office of the University Registrar</div>
                <div style={{ fontSize: '12px', color: '#888' }}>{data.universityAddress || '123 University Blvd, City, State, 12345'}</div>
            </div>
        </div>

        <div style={{ textAlign: 'center', margin: '50px 0' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline', letterSpacing: '1px' }}>
                Certificate of Enrollment
            </h2>
        </div>

        <div style={{ fontSize: '14px', textAlign: 'right', marginBottom: '40px' }}>
            <strong>Date Issued:</strong> {data.issueDate}
        </div>

        {/* Body */}
        <div style={{ fontSize: '16px', lineHeight: '2', textAlign: 'justify', marginBottom: '60px' }}>
            <p style={{ marginBottom: '30px' }}>To Whom It May Concern:</p>
            
            <p>
                This letter is to certify that <strong>{data.studentName}</strong> (Student ID: <strong>{data.studentID}</strong>) 
                is currently enrolled as a full-time student at {data.universityName}.
            </p>
            
            <p>
                The student is pursuing a <strong>{data.program}</strong> in <strong>{data.major}</strong> within the {data.college}.
                The student is currently registered for the <strong>{data.term}</strong> academic term.
            </p>
            
            <p>
                <strong>Anticipated Graduation Date:</strong> May 2028<br/>
                <strong>Academic Standing:</strong> Good Standing
            </p>
            
            <p style={{ marginTop: '30px' }}>
                This certificate is issued upon the request of the student for whatever legal purpose it may serve.
            </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <div style={{ borderBottom: '1px solid #333', width: '250px', marginBottom: '10px' }}></div>
                <div style={{ fontWeight: 'bold' }}>{data.officials ? data.officials.registrar : 'Registrar Name'}</div>
                <div style={{ fontSize: '14px', color: '#666' }}>University Registrar</div>
            </div>
            
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#888', maxWidth: '200px' }}>
                <em>This document is electronically generated and valid without a physical signature if verified online.</em>
            </div>
        </div>
    </div>
  );
});

export default EnrollmentCertificateTemplate;
