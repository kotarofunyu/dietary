import React, { useState } from 'react'

export const useStatus = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const setStatus = (string: string) => {
    switch (string) {
      case 'success':
        setSuccess(true)
      case 'error':
        setError(true)
      default:
        setSuccess(false)
        setError(false)
    }
  }

  return [success, error, setStatus] as const
}
