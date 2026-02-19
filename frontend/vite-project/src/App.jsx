import React from 'react'
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/clerk-react'
const App = () => {
  return (
  <>
  <h1>Welcome to the app</h1>
  <SignedOut>
    <SignInButton>
      <button>login</button>
    </SignInButton>
  </SignedOut>
  <SignedIn>
    <SignOutButton/>
  </SignedIn>
  <UserButton/>
  </>

   
  )
}

export default App