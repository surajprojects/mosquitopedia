// Next js import
import Image from "next/image";

// Mosquito card export
export function MosquitoCard({
    imageurl = "/mosquito-img.jpg",
    mosquitoName = "Alex",
    killerName = "David",
    familyName = "Suckers",
    location = "Living room",
    story = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nihil perferendis blanditiis maxime in vel nulla expedita ut debitis facilis fugit quaerat quas, modi alias consequuntur vitae quisquam aperiam itaque?",
    tags = ["new", "latest"],
}: {
    imageurl?: string,
    mosquitoName?: string,
    killerName?: string,
    familyName?: string,
    location?: string,
    story?: string,
    tags?: string[],
}) {
    return (
        <>
            {/* Card Wrapper */}
            <div className="w-72 rounded-2xl bg-amber-200 border shadow-md">
                {/* Card Image */}
                <div className="relative w-full h-48 border-b">
                    <Image
                        src={imageurl}
                        alt={`${mosquitoName} Image`}
                        fill
                        className="aspect-square object-cover rounded-t-2xl"
                    />
                </div>
                {/* Card Body */}
                <div className="m-4">
                    {/* Like and Dislike later */}
                    {/* Mosquito Name */}
                    <p className="text-2xl font-semibold capitalize my-1">{mosquitoName}</p>
                    {/* Killer Name */}
                    <p className="font-medium capitalize my-1">Killer - <span className="font-normal">{killerName}</span></p>
                    {/* Family */}
                    <p className="font-medium capitalize my-1">Family - <span className="font-normal">{familyName}</span></p>
                    {/* Location */}
                    <p className="font-medium capitalize my-1">Location - <span className="font-normal">{location}</span></p>
                    {/* Time of Death */}
                    <p className="font-medium my-1">Time of Death - <span className="font-normal">29 Jun. 2025</span></p>
                    {/* Story */}
                    <p className="line-clamp-2 font-medium my-1">Story - <span className="font-normal">{story}</span></p>
                    {/* Tags */}
                    <ul className="mt-2 flex">
                        {tags.map((tag, index) => {
                            return <li key={index} className="border border-black rounded-lg px-1 m-1 shadow text-white bg-blue-500">&bull;{tag}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};