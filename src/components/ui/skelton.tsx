import { cn } from "@/libs/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-gray-400 animate-pulse ", className)}
      {...props}
    />
  );
}

export { Skeleton };
