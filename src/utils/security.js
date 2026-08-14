// Real-time Path & Input Validation Utility

// Validate path integrity to prevent XSS / path traversal attacks
export const validatePathIntegrity = (path) => {
  if (typeof path !== 'string') return false
  // Reject scripts, Javascript protocol, data URIs, or suspicious path patterns
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /data:/i,
    /\.\.\//,
    /[<>'"]/,
  ]
  return !dangerousPatterns.some((pattern) => pattern.test(path))
}

