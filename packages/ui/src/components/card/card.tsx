import { LucideIcon } from "lucide-react";
import { getIcon, IconName } from "@mosquitopedia/ui/lib/getIcon";

export interface CardType {
  icon: IconName;
  title: string;
  description: string;
}

export type CardTypeList = CardType[];

function CardIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <>
      <div className="rounded-full bg-primary/10 p-3 text-primary">
        <Icon className="size-6" />
      </div>
    </>
  );
}

export default function Card({
  icon = "Users",
  title = "title",
  description = "description",
}: Partial<CardType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white p-7 shadow-sm">
        {/* Icon */}
        <CardIcon Icon={currentIcon} />
        <div className="mt-4">
          {/* Title */}
          <p className="font-heading text-center text-5xl font-bold">{title}</p>
          {/* Description */}
          <p className="mt-1 text-center text-sm text-secondary capitalize">{description}</p>
        </div>
      </div>
    </>
  );
}
