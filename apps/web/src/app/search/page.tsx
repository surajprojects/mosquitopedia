import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { MosquitoCard } from "@mosquitopedia/ui";

// Search page export
export default function Search() {
    return (
        <>
            {/* Home Search Form */}
            <form className="my-4 w-full flex justify-center items-center">
                <input
                    type="text"
                    id="homeSearch"
                    name="homeSearch"
                    placeholder="Find your mosquito..."
                    className="border-2 text-lg rounded-l-full w-1/4 py-1 px-2 shadow"
                />
                <button className="border-2 border-l-0 rounded-r-full shadow py-1 px-3 bg-gray-50 hover:cursor-pointer hover:bg-gray-100">
                    <MagnifyingGlassIcon className="size-7" />
                </button>
            </form>
            {/* Cards Section Wrapper */}
            <div className="mx-32">
                <div className="flex justify-between">
                    {/* Title */}
                    <p className="my-5 text-xl font-medium">Search Results: alex</p>
                    {/* Filter */}
                    <div className="font-medium">
                        <label htmlFor="filter" className="mx-2 text-lg">Filter</label>
                        <select name="filter" id="fitler" className="border rounded-3xl px-1 hover:cursor-pointer">
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                </div>
                {/* Cards Grid */}
                <div className="grid grid-cols-5 gap-14">
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                    <MosquitoCard />
                </div>
            </div>
        </>
    );
};