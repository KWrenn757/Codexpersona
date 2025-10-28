import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { decision } = await request.json();

    if (!decision || decision.trim() === '') {
      return NextResponse.json(
        { error: 'Decision text is required.' },
        { status: 400 }
      );
    }

    const simulatedResponse = `Simulation complete. For decision: "${decision}"`;

    return NextResponse.json(
      { result: simulatedResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Persona API is live!' }, { status: 200 });
}
