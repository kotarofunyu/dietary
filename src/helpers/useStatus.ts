import React, { useState } from 'react'

export const useStatus = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  // *冗長かな...
  const setStatus = (status: 'success' | 'error') => {
    switch (status) {
      case 'success': {
        setSuccess(true)
        setError(false)
        break
      }
      case 'error': {
        setError(true)
        setSuccess(false)
        break
      }
      default:
        setSuccess(false)
        setError(false)
    }
  }

  return [success, error, setStatus] as const
}
