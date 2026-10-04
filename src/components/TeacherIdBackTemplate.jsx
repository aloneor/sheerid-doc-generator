import React, { forwardRef } from 'react';

const TeacherIdBackTemplate = forwardRef(({ data }, ref) => {
  return (
    <div 
      ref={ref} 
      style={{
        width: '750px',
        height: '480px',
        backgroundColor: '#000',
        borderRadius: '24px',
        overflow: 'hidden',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Black magnetic stripe */}
      <div style={{
        height: '75px',
        background: '#000',
        width: '100%'
      }} />

      {/* Content */}
      <div style={{
        flex: 1,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
      }}>
        {/* Address */}
        <div style={{ marginBottom: '22px' }}>
          <div style={{
            fontSize: '15px',
            color: '#666',
            textTransform: 'uppercase',
            marginBottom: '9px',
            letterSpacing: '0.75px'
          }}>
            FACULTY ADDRESS
          </div>
          <div style={{ fontSize: '21px', color: '#333', lineHeight: 1.4 }}>
            {data.address}
          </div>
        </div>

        {/* Notice */}
        <div style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: 1.5,
          margin: '22px 0',
          flex: 1
        }}>
          This identification card is the property of {data.universityName} and must be returned upon request. 
          Faculty members are required to carry this card while on university premises. 
          If found, please return to the Human Resources Department.
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: '22px' }}>
          <div style={{
            fontSize: '15px',
            color: '#666',
            textTransform: 'uppercase',
            marginBottom: '9px',
            letterSpacing: '0.75px'
          }}>
            EMERGENCY CONTACT
          </div>
          <div style={{ fontSize: '16px', color: '#333', lineHeight: 1.4 }}>
            University Security: (555) 123-4567<br/>
            HR Department: (555) 123-4500
          </div>
        </div>

        {/* Signature section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginTop: 'auto'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '30px',
              fontFamily: "'Brush Script MT', cursive",
              color: '#333',
              marginBottom: '4px'
            }}>
              {data.teacherFullName}
            </div>
            <div style={{ fontSize: '15px', color: '#999' }}>
              Faculty Signature
            </div>
          </div>
          <div style={{ width: '120px', height: '120px' }}>
            {data.universityLogo ? (
              <img src={data.universityLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <svg width="120" height="120" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#4a5568"/>
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14">LOGO</text>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TeacherIdBackTemplate;
