import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { validatePathIntegrity } from '../utils/security.js'

export default function SecurityGuard({ children }) {
  const location = useLocation()

  useEffect(() => {
    // Basic sanitization check log only
    if (!validatePathIntegrity(location.pathname)) {
      console.warn('Suspicious URL pattern detected:', location.pathname)
    }
  }, [location.pathname])

  return <>{children}</>
}

