import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { Skeleton } from "@/components/ui/skeleton";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import React from "react";

const UserStartups = async ({ id }: { id: string }) => {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
    return (
        <>
            {startups.length > 0 ? (
                startups.map((startup: StartupCardType) => (
                    <StartupCard key={startup._id} post={startup} />
                ))
            ) : (
                <p className="no-result">No posts yet</p>
            )}
        </>
    );
};

export const StartupCardSkeleton = () => {
    return (
        <>
            {[0, 1, 2, 3, 4].map((index: number) => (
                <li key={cn("skeleton", index)}>
                    <Skeleton className="startup-card_skeleton" />
                </li>
            ))}
        </>
    );
};

export default UserStartups;
