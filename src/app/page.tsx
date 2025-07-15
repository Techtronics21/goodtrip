'use client'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handlePlan = async () => {
    setLoading(true)
    const res = await axios.post('/api/plan', { prompt })
    setResult(res.data)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Smart Trip Planner</h1>
      <textarea
        placeholder="e.g. Plan a 5-day trip to Kerala with beaches and waterfalls"
        className="w-full max-w-xl h-32 p-2 border rounded mb-4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handlePlan}
        disabled={loading || !prompt.trim()}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Planning...' : 'Generate Plan'}
      </button>

      {result && (
        <div className="mt-6 w-full max-w-2xl bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Trip Plan</h2>
          {result.plan?.map((day: any, idx: number) => (
            <div key={idx} className="mb-2">
              <strong>Day {idx + 1}:</strong> {day.activity}
            </div>
          ))}
          <p className="mt-4 font-medium">Estimated Cost: {result.estimatedCost}</p>
        </div>
      )}
    </div>
  )
}