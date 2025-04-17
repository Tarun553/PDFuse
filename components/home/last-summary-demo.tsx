import { SummaryCardGrid } from "@/components/ui/summary-card-grid";
import prisma from "@/lib/db";
import {auth} from "@clerk/nextjs/server";

export default async function LastSummaryDemo(){
    const {userId} = await auth();
    if (!userId) {
      return null;
    }

    const lastSummary = await prisma.summary.findFirst({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!lastSummary) {
      return null;
    }

    return (
      <SummaryCardGrid summaries={[lastSummary]} />
    );
  }
