import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain')
  res.send('dh=5cf24350a32700d8ae76a3d3118d3a95392552bb')
}
