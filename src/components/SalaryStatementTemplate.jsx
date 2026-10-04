import React, { forwardRef } from 'react';

const SalaryStatementTemplate = forwardRef(({ data }, ref) => {
  const grossPay = data.baseSalary / 26; // Bi-weekly gross
  const federalTax = grossPay * 0.22;
  const stateTax = grossPay * 0.06;
  const socialSecurity = grossPay * 0.062;
  const medicare = grossPay * 0.0145;
  const retirement = grossPay * 0.05;
  const totalDeductions = federalTax + stateTax + socialSecurity + medicare + retirement;
  const netPay = grossPay - totalDeductions;

  const formatCurrency = (amount) => amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

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
        fontSize: '11px',
        lineHeight: '1.4',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: '30px 40px',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <div style={{ 
          marginBottom: '20px',
          paddingBottom: '10px',
          borderBottom: '1px solid #000000'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000000', marginBottom: '3px' }}>
              {data.universityName}
            </div>
            <div style={{ fontSize: '10px', color: '#000000', marginBottom: '2px' }}>
              Payroll Department | {data.universityAddress}
            </div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#000000', marginTop: '8px' }}>
              SALARY STATEMENT
            </div>
            <div style={{ fontSize: '9px', color: '#000000' }}>
              Pay Period: {data.payPeriodStart} - {data.payPeriodEnd}
            </div>
          </div>
        </div>

        {/* Employee Information */}
        <div style={{ 
          border: '1px solid #000000',
          padding: '10px',
          marginBottom: '15px'
        }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
            Employee Information
          </div>
          <div style={{ fontSize: '9px' }}>
            <div style={{ marginBottom: '3px' }}>
              <strong>Name:</strong> {data.teacherFullName} | <strong>ID:</strong> {data.employeeID}
            </div>
            <div>
              <strong>Department:</strong> {data.department} | <strong>Position:</strong> {data.position}
            </div>
          </div>
        </div>

        {/* Earnings Section */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ 
            backgroundColor: '#059669',
            color: 'white',
            padding: '4px 8px',
            fontSize: '10px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            EARNINGS
          </div>
          <div style={{ border: '1px solid #059669', fontSize: '8px' }}>
            <div style={{ padding: '3px', borderBottom: '1px solid #000000' }}>
              <strong>Regular Salary:</strong> {formatCurrency(grossPay)} (Current) | {formatCurrency(grossPay * 12)} (YTD)
            </div>
            <div style={{ padding: '3px', backgroundColor: '#f0fdf4', fontWeight: 'bold' }}>
              <strong>TOTAL GROSS PAY:</strong> {formatCurrency(grossPay)}
            </div>
          </div>
        </div>

        {/* Deductions Section */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ 
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '4px 8px',
            fontSize: '10px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            DEDUCTIONS
          </div>
          <div style={{ border: '1px solid #dc2626', fontSize: '8px' }}>
            <div style={{ padding: '2px', borderBottom: '1px solid #e5e7eb' }}>
              <strong>Federal Tax:</strong> {formatCurrency(federalTax)} | <strong>State Tax:</strong> {formatCurrency(stateTax)}
            </div>
            <div style={{ padding: '2px', borderBottom: '1px solid #e5e7eb' }}>
              <strong>Social Security:</strong> {formatCurrency(socialSecurity)} | <strong>Medicare:</strong> {formatCurrency(medicare)}
            </div>
            <div style={{ padding: '2px', borderBottom: '1px solid #e5e7eb' }}>
              <strong>Retirement:</strong> {formatCurrency(retirement)}
            </div>
            <div style={{ padding: '3px', backgroundColor: '#fef2f2', fontWeight: 'bold' }}>
              <strong>TOTAL DEDUCTIONS:</strong> {formatCurrency(totalDeductions)}
            </div>
          </div>
        </div>

        {/* Net Pay Section */}
        <div style={{ 
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '8px',
          marginBottom: '15px',
          textAlign: 'center',
          fontSize: '10px'
        }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '2px' }}>NET PAY</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{formatCurrency(netPay)}</div>
          <div style={{ fontSize: '8px', opacity: 0.8 }}>Amount to be deposited</div>
        </div>

        {/* Footer */}
        <div style={{ 
          borderTop: '1px solid #000000',
          paddingTop: '8px',
          fontSize: '8px',
          textAlign: 'center'
        }}>
          <div>
            This statement is for informational purposes only. Questions: Contact Payroll at (555) 123-4600
          </div>
        </div>
      </div>
    </div>
  );
});

export default SalaryStatementTemplate;
