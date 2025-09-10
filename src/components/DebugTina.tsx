'use client'

import { useEffect } from 'react'

export default function DebugTina() {
  useEffect(() => {
    console.log('=== TinaCMS Environment Variables Debug ===');
    console.log('NEXT_PUBLIC_TINA_CLIENT_ID:', process.env.NEXT_PUBLIC_TINA_CLIENT_ID);
    console.log('TINA_TOKEN:', process.env.TINA_TOKEN ? 'SET (hidden)' : 'MISSING');
    console.log('GITHUB_BRANCH:', process.env.GITHUB_BRANCH);
    console.log('VERCEL_GIT_COMMIT_REF:', process.env.VERCEL_GIT_COMMIT_REF);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('=======================================');
  }, []);

  return null;
}
