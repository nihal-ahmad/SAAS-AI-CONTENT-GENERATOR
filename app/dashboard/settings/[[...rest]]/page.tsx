import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex justify-center m-50'>
        <UserProfile/>
    </div>
  )
}

export default Settings