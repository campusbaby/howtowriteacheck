'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/simulator');
  }, [router]);

  // 这段代码不会执行，但为了类型安全而保留
  return null;
}
