import React, { forwardRef } from 'react';

const TeachingCertificateTemplate = forwardRef(({ data }, ref) => {
  return (
    <div 
      ref={ref} 
      style={{
        width: '595px',
        height: '842px',
        backgroundColor: '#ffffff',
        border: '1px solid #ffffff',
        padding: '0',
        margin: '0',
        fontFamily: "Times New Roman, serif",
        color: '#000000',
        fontSize: '12px',
        lineHeight: '1.4',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: '40px 50px',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#000000', marginBottom: '5px' }}>
            {data.universityName}
          </div>
          <div style={{ fontSize: '12px', color: '#000000', marginBottom: '20px' }}>
            {data.college}
          </div>
          
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#dc2626',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            Teaching Certificate
          </div>
          
          <div style={{
            width: '100px',
            height: '2px',
            backgroundColor: '#dc2626',
            margin: '0 auto'
          }} />
        </div>

        {/* Certificate Content */}
        <div style={{ marginBottom: '20px', fontSize: '11px' }}>
          <div style={{ textAlign: 'center', marginBottom: '15px', fontSize: '12px', fontStyle: 'italic' }}>
            This is to certify that
          </div>
          
          <div style={{ 
            textAlign: 'center', 
            fontSize: '16px', 
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: '15px',
            borderBottom: '1px solid #dc2626',
            paddingBottom: '5px'
          }}>
            {data.teacherFullName}
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '15px', fontSize: '11px' }}>
            has successfully completed the requirements for teaching certification and is hereby 
            authorized to teach in the field of <strong>{data.department}</strong> at {data.universityName}.
          </div>
          
          <div style={{ marginBottom: '15px', fontSize: '10px' }}>
            <strong>Areas of Specialization:</strong>
            <div style={{ marginTop: '5px', paddingLeft: '15px' }}>
              {data.subjects && data.subjects.slice(0, 2).map((subject, index) => (
                <div key={index} style={{ marginBottom: '2px' }}>• {subject}</div>
              ))}
            </div>
          </div>
          
          <div style={{ marginBottom: '15px', fontSize: '10px' }}>
            <strong>Position:</strong> {data.position}
          </div>
          
          <div style={{ marginBottom: '15px', fontSize: '10px' }}>
            This certification is granted in accordance with the standards of {data.universityName}.
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '15px', fontSize: '10px' }}>
            <strong>Date of Certification:</strong> {data.certificationDate}
          </div>
        </div>

        {/* Footer Signatures */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '20px',
          paddingTop: '15px',
          borderTop: '1px solid #000000',
          fontSize: '9px'
        }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ 
              borderBottom: '1px solid #000000', 
              width: '120px', 
              margin: '0 auto 5px',
              height: '20px'
            }} />
            <div style={{ fontSize: '9px', fontWeight: 'bold' }}>
              {data.officials?.dean || 'Dean of Faculty'}
            </div>
            <div style={{ fontSize: '8px' }}>
              Dean, {data.college}
            </div>
          </div>
          
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ 
              borderBottom: '1px solid #000000', 
              width: '120px', 
              margin: '0 auto 5px',
              height: '20px'
            }} />
            <div style={{ fontSize: '9px', fontWeight: 'bold' }}>
              {data.officials?.principal || 'University Principal'}
            </div>
            <div style={{ fontSize: '8px' }}>
              Principal, {data.universityName}
            </div>
          </div>
        </div>
        
        {/* Certificate Number */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '10px', 
          fontSize: '8px'
        }}>
          Certificate No: TC-{data.employeeID}-{new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
});

export default TeachingCertificateTemplate;
