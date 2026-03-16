import { Clock, Heart, MapPin, UserRound } from "lucide-react";

export default function MosquitoCard() {
  return (
    <>
      <div className="transition-effect w-full rounded-2xl bg-white shadow-sm hover:shadow-md">
        {/* Header */}
        <div className="relative max-h-80 w-full rounded-t-2xl">
          {/*  */}
          <img
            src="https://images.pexels.com/photos/86722/tiger-mosquito-mosquito-asian-tigermucke-sting-86722.jpeg?cs=srgb&dl=pexels-pixabay-86722.jpg&fm=jpg"
            alt=""
            className="rounded-t-2xl"
          />

          {/* Tag */}
          <span className="absolute top-3 left-3 rounded-full border border-green-700 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            Aedes
          </span>
          {/* Like Button */}
          <button
            type="button"
            className="btn absolute top-3 right-3 rounded-full bg-white/75 p-1.5 text-secondary hover:bg-white"
          >
            <Heart className="size-4" strokeWidth={2.5} />
          </button>
        </div>
        {/* Body */}
        <div className="p-4">
          <div className="mb-2.5 flex flex-col gap-y-1.5 border-b border-secondary/30 pb-2.5">
            {/* Mosquito Name */}
            <h6 className="font-heading font-semibold">Buzz McFlighty</h6>
            {/* Killer Username */}
            <p className="flex items-center gap-x-1.5 text-xs text-secondary">
              <UserRound className="size-3" />
              @MosquitoSlayer99
            </p>
            {/* Location */}
            <p className="flex items-center gap-x-1.5 text-xs text-secondary">
              <MapPin className="size-3" />
              Kitchen, New York
            </p>
            {/* Date & Time */}
            <p className="flex items-center gap-x-1.5 text-xs text-secondary">
              <Clock className="size-3" />
              Jan 15, 10:30 PM
            </p>
          </div>
          {/* Likes */}
          <p className="flex items-center gap-x-1.5 text-xs text-secondary">
            <Heart className="size-3" />
            142
          </p>
        </div>
      </div>
    </>
  );
}
