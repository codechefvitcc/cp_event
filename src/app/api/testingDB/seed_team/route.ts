import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Team from "@/models/Team";

export async function POST() {
  try {
    await connectDB();

    const team = {
      teamName: "Team Alpha",
      email: "teamalpha@gmail.com",
      codeforcesHandle: null,
    };

    // Avoid duplicate insert
    const exists = await Team.findOne({ email: team.email });
    if (exists) {
      return NextResponse.json(
        { message: "Team already exists in DB" },
        { status: 400 }
      );
    }

    await Team.create(team);

    return NextResponse.json({
      message: "Team inserted successfully",
      team,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to insert team" },
      { status: 500 }
    );
  }
}
