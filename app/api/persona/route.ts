import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'Persona API is live!' });
}

export async function POST(request: Request) {
  try {
    const { decision } = await request.json();
    if (!decision || decision.trim() === '') {
      return NextResponse.json({ error: 'Decision text is required' }, { status: 400 });
    }
    const result = `Simulation complete for: ${decision}`;
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON or internal error' }, { status: 500 });
  }
}
