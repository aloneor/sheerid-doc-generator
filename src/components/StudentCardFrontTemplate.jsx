import React, { forwardRef } from 'react';

const StudentCardFrontTemplate = forwardRef(({ data }, ref) => {
  return (
    <div 
      ref={ref} 
      style={{
        width: '750px',
        height: '480px',
        backgroundColor: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div style={{
        background: data.cardColor || '#3b82f6',
        color: 'white',
        padding: '22px 30px',
        display: 'flex',
        alignItems: 'center',
        gap: '22px',
        height: '135px',
        flexShrink: 0
      }}>
        <div style={{
          width: '112px',
          height: '112px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          overflow: 'hidden'
        }}>
          {data.universityLogo ? (
            <img src={data.universityLogo} alt="Logo" style={{ width: '97px', height: '97px', objectFit: 'contain' }} />
          ) : (
            <svg width="97" height="97" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#4a5568"/>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14">LOGO</text>
            </svg>
          )}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '33px', fontWeight: 'bold', marginBottom: '3px', lineHeight: 1.2 }}>
            {data.universityName}
          </div>
          <div style={{ fontSize: '18px', opacity: 0.95, lineHeight: 1.3, textTransform: 'uppercase' }}>
            {data.cardSubtitle || 'INTERNATIONAL STUDENT ID CARD'}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{
        flex: 1,
        padding: '25px 30px',
        display: 'flex',
        gap: '30px',
        background: '#fafafa',
        overflow: 'hidden',
        minHeight: 0
      }}>
        {/* Photo */}
        <div style={{
          width: '140px',
          height: '180px',
          background: '#e0e0e0',
          borderRadius: '9px',
          overflow: 'hidden',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid #ddd'
        }}>
          {data.studentPhoto ? (
            <img src={data.studentPhoto} alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ color: '#999', fontSize: '16px', textAlign: 'center' }}>
              PHOTO<br/>3x4
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '7px 0'
        }}>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '15px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.75px', marginBottom: '3px' }}>
              NAME
            </div>
            <div style={{ fontSize: '24px', fontWeight: 500, color: '#333' }}>
              {data.studentName}
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '15px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.75px', marginBottom: '3px' }}>
              STUDENT ID
            </div>
            <div style={{ fontSize: '24px', fontWeight: 500, color: '#333' }}>
              {data.studentID}
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '15px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.75px', marginBottom: '3px' }}>
              FACULTY
            </div>
            <div style={{ fontSize: '24px', fontWeight: 500, color: '#333' }}>
              {data.college}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '18px 30px',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #e0e0e0',
        height: '90px',
        flexShrink: 0
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', marginBottom: '3px' }}>
            ISSUE DATE
          </div>
          <div style={{ fontSize: '19px', fontWeight: 500, color: '#333' }}>
            {data.cardIssueDate || '01/15/2023'}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', marginBottom: '3px' }}>
            VALID UNTIL
          </div>
          <div style={{ fontSize: '19px', fontWeight: 500, color: '#333' }}>
            {data.cardValidDate || '01/15/2027'}
          </div>
        </div>
      </div>
    </div>
  );
});

export default StudentCardFrontTemplate;
