'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export default function SyncClerkToSupabase() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    const sync = async () => {
      if (!isSignedIn || !user) return;

      await fetch('/api/sync-user', {
        method: 'POST',
        body: JSON.stringify({
          id: user.id,
          email: user.emailAddresses[0]?.emailAddress,
          name: user.fullName,
          imageUrl: user.imageUrl,
        }),
      });
    };

    sync();
  }, [isSignedIn, user]);

  return null;
}
