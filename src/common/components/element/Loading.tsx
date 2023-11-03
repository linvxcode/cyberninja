import React from "react";
import {Card, Skeleton} from "@nextui-org/react";
import clsx from "clsx";

export default function Loading({className}: any) {
  return (
    <Card className={clsx("w-full space-y-5 p-4 bg-transparent", className)} radius="lg" >
      <Skeleton className="rounded-lg">
        <div className="h-[350px] rounded-lg "></div>
      </Skeleton>
    </Card>
  );
}
