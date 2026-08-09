export const PHONE_DISPLAY = '877 627 8313'
export const PHONE_TEL = 'tel:+18776278313'
export const HELPLINE_DISPLAY = PHONE_DISPLAY
export const HELPLINE_TEL = PHONE_TEL

export const openPhoneDialer = (tel) => {
  if (typeof window === 'undefined') {
    return
  }
  window.location.href = tel
}

export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
]
