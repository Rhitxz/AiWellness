// /app/api/sync-user/route.ts (Next.js App Router)

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { id, email, name, imageUrl } = body;

  if (!id || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const user = await prisma.user.upsert({
    where: { id },
    update: {
      email,
      name,
      imageUrl,
    },
    create: {
      id,
      email,
      name,
      imageUrl,
    },
  });

  return NextResponse.json({ success: true, user });
}
