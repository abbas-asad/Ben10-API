import { NextResponse } from "next/server"

export const GET = () => {

  return NextResponse.json(
    {
      "message": "Welcome to the Ben 10 API."
    }
  )
}