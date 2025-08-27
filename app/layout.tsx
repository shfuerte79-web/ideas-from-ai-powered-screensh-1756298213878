import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Screenshot to Podcast",
    "one_liner": "Turn screenshots into audio summaries using AI voiceovers.",
    "why_now": "The rise of audio content as a primary medium for information consumption.",
    "novel_mechanism": "Using AI to analyze visual content and create dynamic audio scripts tailored for different audiences.",
    "ai_stack": [
      "GPT",
      "Voice Synthesis",
      "Vision",
      "NLP"
    ],
    "edge_use_cases": [
      "Accessibility for visually impaired users",
      "Quick study aids for students",
      "Multitasking users who prefer audio"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot upload",
        "AI text extraction",
        "Audio generation"
      ],
      "tools": [
        "Next.js",
        "AWS Polly",
        "Firebase"
      ],
      "data_bootstrap": [
        "Public domain textbooks",
        "Image datasets for training"
      ],
      "risk": [
        "Varying accuracy of OCR",
        "Voice quality concerns"
      ],
      "mitigation": [
        "Use multiple OCR models",
        "Provide voice customization options"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Transform knowledge into sound",
        "See it, hear it!"
      ],
      "channels": [
        "ProductHunt",
        "Podcast platforms",
        "Social Media"
      ],
      "pricing": {
        "free": "5 screenshot conversions/month",
        "pro": "$9.99/month for unlimited access",
        "business": "$49.99/month for team accounts"
      }
    },
    "moat": [
      "First-mover advantage in the screenshot-to-audio space",
      "Engagement through podcast-like format"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "This product provides an innovative way to consume visual content through audio, catering to busy users and leveraging the audio content trend."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}