// import { NextRequest, NextResponse } from "next/server";

// // Fetch data from `/api/aliens`
// export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
//     // Fetch all aliens from the static API
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/aliens`);
//     const aliens = await res.json();

//     // Find the alien by ID
//     const alienId = parseInt(params.id, 10);
//     const alien = aliens.find((a: { id: number }) => a.id === alienId);

//     // Check if the alien exists
//     if (!alien) {
//         return NextResponse.json({ message: "Alien not found" }, { status: 404 });
//     }

//     // Return the alien details
//     return NextResponse.json(alien);
// };


import { NextRequest, NextResponse } from "next/server";

// Fetch data from `/api/aliens`
export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  // Resolve the params if it's a Promise
  const { id } = await context.params;

  // Fetch all aliens from the static API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/aliens`);
  const aliens = await res.json();

  // Find the alien by ID
  const alienId = parseInt(id, 10);
  const alien = aliens.find((a: { id: number }) => a.id === alienId);

  // Check if the alien exists
  if (!alien) {
    return NextResponse.json({ message: "Alien not found" }, { status: 404 });
  }

  // Return the alien details
  return NextResponse.json(alien);
};
