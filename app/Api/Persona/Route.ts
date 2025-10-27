import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { decision } = await request.json?.() ?? {};
    if (!decision || String(decision).trim() === '') {
      return NextResponse.json({ error: 'Decision text is required.' }, { status: 400 });
    }
    // Placeholder simulation
    const simulatedResponse =
      `Simulation complete. For decision: "${decision}", your best immediate move is: ` +
      `write the success criteria, list 3 risks, and run a 7-day micro-trial.`;
    return NextResponse.json({ result: simulatedResponse }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Persona API is live!' }, { status: 200 });
}
