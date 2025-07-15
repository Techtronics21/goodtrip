import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  const fakePlan = {
    plan: [
      { day: 1, activity: "Arrive and rest." },
      { day: 2, activity: "Beach and sunset." },
      { day: 3, activity: "Waterfall trek." },
      { day: 4, activity: "Cultural tour." },
      { day: 5, activity: "Backwater ride." }
    ],
    estimatedCost: "₹18,500"
  }

  return NextResponse.json(fakePlan)
}
