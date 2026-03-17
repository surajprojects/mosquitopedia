import { Quote } from "lucide-react";

export interface ReviewCardType {
  review: string;
  username: string;
}

export type ReviewCardTypeList = ReviewCardType[];

export default function ReviewCard({
  review = "review",
  username = "username",
}: Partial<ReviewCardType>) {
  return (
    <>
      <div className="transition-effect rounded-2xl bg-white p-5 shadow-sm hover:shadow-md">
        <div className="mb-3 border-b border-secondary/25 pb-3">
          <Quote className="mb-2 size-3 fill-primary text-primary opacity-50" />
          {/* Review */}
          <p>{review}</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div className="font-heading flex size-8 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
            <p className="capitalize">{username.slice(0, 1)}</p>
          </div>
          {/* Username */}
          <p className="text-sm font-medium">@{username}</p>
        </div>
      </div>
    </>
  );
}
