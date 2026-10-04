import React, { forwardRef } from 'react';

const EmploymentLetterTemplate = forwardRef(({ data }, ref) => {
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
        {/* Letterhead */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '25px',
          paddingBottom: '15px',
          borderBottom: '1px solid #000000'
        }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#000000', marginBottom: '5px', textTransform: 'uppercase' }}>
            {data.universityName}
          </div>
          <div style={{ fontSize: '11px', color: '#000000', marginBottom: '3px' }}>
            Office of Human Resources
          </div>
          <div style={{ fontSize: '10px', color: '#000000', marginBottom: '5px' }}>
            {data.universityAddress}
          </div>
          <div style={{ fontSize: '9px', color: '#000000' }}>
            Tel: (555) 123-4500 | Email: hr@{data.universityName?.toLowerCase().replace(/\s+/g, '')}.edu
          </div>
        </div>

        {/* Date and Reference */}
        <div style={{ marginBottom: '20px', fontSize: '10px' }}>
          <div style={{ marginBottom: '5px' }}>
            <strong>Date:</strong> {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>Reference No:</strong> HR-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000)}
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>Employee ID:</strong> {data.employeeID}
          </div>
        </div>

        {/* Salutation */}
        <div style={{ marginBottom: '15px', fontSize: '12px' }}>
          To Whom It May Concern:
        </div>

        {/* Subject Line */}
        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', fontWeight: 'bold', textDecoration: 'underline' }}>
            EMPLOYMENT VERIFICATION
          </div>
        </div>

        {/* Body */}
        <div style={{ marginBottom: '15px', fontSize: '11px' }}>
          This is to certify that <strong>{data.teacherFullName}</strong> is currently employed as a 
          full-time faculty member at {data.universityName}.
        </div>

        {/* Employment Details */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
            EMPLOYMENT DETAILS
          </div>
          <div style={{ border: '1px solid #000000', fontSize: '10px' }}>
            <div style={{ padding: '4px', borderBottom: '1px solid #000000' }}>
              <strong>Full Name:</strong> {data.teacherFullName}
            </div>
            <div style={{ padding: '4px', borderBottom: '1px solid #000000' }}>
              <strong>Employee ID:</strong> {data.employeeID}
            </div>
            <div style={{ padding: '4px', borderBottom: '1px solid #000000' }}>
              <strong>Position:</strong> {data.position}
            </div>
            <div style={{ padding: '4px', borderBottom: '1px solid #000000' }}>
              <strong>Department:</strong> {data.department}
            </div>
            <div style={{ padding: '4px', borderBottom: '1px solid #000000' }}>
              <strong>College:</strong> {data.college}
            </div>
            <div style={{ padding: '4px', borderBottom: '1px solid #000000' }}>
              <strong>Employment Status:</strong> Full-time Faculty Member
            </div>
            <div style={{ padding: '4px' }}>
              <strong>Date of Appointment:</strong> {data.hireDate}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '10px', fontSize: '11px' }}>
          <strong>Employment Status:</strong> {data.teacherFullName} maintains active employment status 
          and is in good standing with no disciplinary actions on record.
        </div>

        <div style={{ marginBottom: '15px', fontSize: '11px' }}>
          This verification is issued for official purposes at the employee's request. 
          For additional verification, contact HR at (555) 123-4500.
        </div>

        {/* Closing */}
        <div style={{ marginBottom: '20px', fontSize: '11px' }}>
          <div>Respectfully yours,</div>
        </div>

        {/* Signature */}
        <div style={{ marginBottom: '25px' }}>
          <div style={{ 
            borderBottom: '1px solid #000000', 
            width: '150px', 
            marginBottom: '6px',
            height: '25px'
          }} />
          <div style={{ fontSize: '11px', fontWeight: 'bold' }}>
            {data.officials?.hr}
          </div>
          <div style={{ fontSize: '10px', marginBottom: '2px' }}>
            Director, Human Resources
          </div>
          <div style={{ fontSize: '10px' }}>
            {data.universityName}
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          borderTop: '1px solid #000000',
          paddingTop: '8px',
          fontSize: '8px',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '2px', fontWeight: 'bold' }}>
            EMPLOYMENT VERIFICATION
          </div>
          <div>
            This verification is issued for official purposes. Contact HR: (555) 123-4500 | Ref: {data.employeeID}
          </div>
        </div>
      </div>
    </div>
  );
});

export default EmploymentLetterTemplate;
