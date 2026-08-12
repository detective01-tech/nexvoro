import { useState, useEffect } from 'react'
import { getSecurityDiagnostics, encryptPath } from '../utils/security.js'

export default function SecurityManager({ isOpen, onClose }) {
  const [diagnostics, setDiagnostics] = useState(getSecurityDiagnostics())
  const [testPath, setTestPath] = useState('/privacy-policy')
  const [encryptedToken, setEncryptedToken] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setDiagnostics(getSecurityDiagnostics())
      handleEncrypt(testPath)
    }
  }, [isOpen])

  const handleEncrypt = (path) => {
    setTestPath(path)
    const token = encryptPath(path)
    setEncryptedToken(token)
    setCopied(false)
  }

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}/#/sec/${encryptedToken}`
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="security-modal-overlay" style={overlayStyle} onClick={onClose}>
      <div className="security-modal-card" style={cardStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>🔐</span>
            <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.2rem' }}>Security Management Dashboard</h3>
          </div>
          <button style={closeBtnStyle} onClick={onClose}>&times;</button>
        </div>

        <div style={{ padding: '20px' }}>
          <div style={badgeHeaderStyle}>
            <span style={dotStyle} />
            <span>REAL-TIME PATH ENCRYPTION & ROUTE INTEGRITY ACTIVE</span>
          </div>

          <div style={gridStyle}>
            <div style={itemStyle}>
              <div style={labelStyle}>URL Path Encryption</div>
              <div style={valueStyle}>{diagnostics.pathEncryption}</div>
            </div>
            <div style={itemStyle}>
              <div style={labelStyle}>Route Guard Status</div>
              <div style={{ ...valueStyle, color: '#34d399' }}>● {diagnostics.routeGuardStatus}</div>
            </div>
            <div style={itemStyle}>
              <div style={labelStyle}>Connection Protocol</div>
              <div style={valueStyle}>{diagnostics.connectionSecurity}</div>
            </div>
            <div style={itemStyle}>
              <div style={labelStyle}>Content Security Policy</div>
              <div style={valueStyle}>{diagnostics.contentSecurityPolicy}</div>
            </div>
            <div style={itemStyle}>
              <div style={labelStyle}>Session Token Integrity</div>
              <div style={{ ...valueStyle, color: '#34d399' }}>✓ {diagnostics.sessionIntegrity}</div>
            </div>
            <div style={itemStyle}>
              <div style={labelStyle}>Security Threats Blocked</div>
              <div style={{ ...valueStyle, color: '#60a5fa' }}>{diagnostics.threatsBlocked} Threats</div>
            </div>
          </div>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #334155' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#e2e8f0', fontSize: '0.95rem' }}>
              🔑 Real-Time Encrypted Path Token Generator
            </h4>
            <p style={{ margin: '0 0 12px 0', color: '#94a3b8', fontSize: '0.85rem' }}>
              Encrypt any URL path dynamically into a secure, tokenized URL link.
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <select
                value={testPath}
                onChange={(e) => handleEncrypt(e.target.value)}
                style={inputStyle}
              >
                <option value="/privacy-policy">Privacy Policy (/privacy-policy)</option>
                <option value="/terms-of-service">Terms of Service (/terms-of-service)</option>
                <option value="/contact">Contact (/contact)</option>
                <option value="/about">About (/about)</option>
                <option value="/faq">FAQ (/faq)</option>
              </select>
            </div>

            {encryptedToken && (
              <div style={tokenBoxStyle}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>
                  Encrypted Route Token:
                </div>
                <code style={codeStyle}>/sec/{encryptedToken}</code>
                <button style={copyBtnStyle} onClick={handleCopyLink}>
                  {copied ? '✓ Copied!' : 'Copy Encrypted Link'}
                </button>
              </div>
            )}
          </div>
        </div>

        <div style={footerStyle}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            Last System Security Sync: {diagnostics.lastAuditTime}
          </span>
          <button style={btnPrimaryStyle} onClick={onClose}>Close Dashboard</button>
        </div>
      </div>
    </div>
  )
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.75)',
  backdropFilter: 'blur(8px)',
  zIndex: 10000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
}

const cardStyle = {
  backgroundColor: '#0f172a',
  border: '1px solid #334155',
  borderRadius: '16px',
  width: '100%',
  maxWidth: '560px',
  color: '#f8fafc',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 20px',
  backgroundColor: '#1e293b',
  borderBottom: '1px solid #334155',
}

const closeBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#94a3b8',
  fontSize: '24px',
  cursor: 'pointer',
  padding: '0 4px',
}

const badgeHeaderStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 12px',
  borderRadius: '20px',
  backgroundColor: 'rgba(16, 185, 129, 0.15)',
  color: '#34d399',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.5px',
  marginBottom: '16px',
}

const dotStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#34d399',
  boxShadow: '0 0 8px #34d399',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '12px',
}

const itemStyle = {
  backgroundColor: '#1e293b',
  border: '1px solid #334155',
  padding: '10px 14px',
  borderRadius: '10px',
}

const labelStyle = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  marginBottom: '4px',
}

const valueStyle = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#f1f5f9',
}

const inputStyle = {
  width: '100%',
  backgroundColor: '#1e293b',
  border: '1px solid #475569',
  color: '#f8fafc',
  padding: '10px 12px',
  borderRadius: '8px',
  fontSize: '0.85rem',
  outline: 'none',
}

const tokenBoxStyle = {
  backgroundColor: '#1e293b',
  border: '1px dashed #475569',
  padding: '12px',
  borderRadius: '8px',
}

const codeStyle = {
  display: 'block',
  fontFamily: 'monospace',
  fontSize: '0.85rem',
  color: '#38bdf8',
  wordBreak: 'break-all',
  marginBottom: '8px',
}

const copyBtnStyle = {
  backgroundColor: '#0284c7',
  color: '#ffffff',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  fontSize: '0.8rem',
  fontWeight: 600,
  cursor: 'pointer',
}

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px 20px',
  backgroundColor: '#1e293b',
  borderTop: '1px solid #334155',
}

const btnPrimaryStyle = {
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: 'pointer',
}
