import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { validatePathIntegrity, decryptPath } from '../utils/security.js'

export default function SecurityGuard({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const [securityAlert, setSecurityAlert] = useState(null)

  useEffect(() => {
    // 1. If user is accessing an encrypted route /sec/:token
    if (location.pathname.startsWith('/sec/')) {
      const token = params.token || location.pathname.replace('/sec/', '')
      if (token) {
        const originalPath = decryptPath(token)
        if (originalPath && validatePathIntegrity(originalPath)) {
          navigate(originalPath, { replace: true })
          return
        } else {
          setSecurityAlert('Invalid or expired encrypted path token detected.')
          setTimeout(() => {
            setSecurityAlert(null)
            navigate('/', { replace: true })
          }, 2500)
          return
        }
      }
    }

    // 2. Real-time path integrity validation
    if (!validatePathIntegrity(location.pathname)) {
      setSecurityAlert('Security Threat Blocked: Malformed or unsafe URL path detected.')
      setTimeout(() => {
        setSecurityAlert(null)
        navigate('/', { replace: true })
      }, 2500)
    }
  }, [location.pathname, params, navigate])

  return (
    <>
      {securityAlert && (
        <div className="security-guard-banner" style={bannerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>🛡️</span>
            <div>
              <strong>Security Guard Alert:</strong> {securityAlert}
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  )
}

const bannerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  backgroundColor: '#991b1b',
  color: '#ffffff',
  padding: '12px 20px',
  textAlign: 'center',
  fontWeight: 500,
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  animation: 'fadeIn 0.3s ease',
}
