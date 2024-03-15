import React from 'react'

export interface ButtonPropsInterface {
  children: React.ReactNode
  onClick: () => void
  title: string
  disabled: boolean
  type: 'button' | 'submit' | 'reset'
}
