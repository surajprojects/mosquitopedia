// Imports
import { MosquitoCard } from "@mosquitopedia/ui";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

// Homepage export
export default function Home() {
  return (
    <>
      {/* Hero Section Wrapper */}
      <div className="my-14 flex flex-col justify-center items-center">
        {/* Title */}
        <h1 className="font-primary text-6xl font-medium">Mosquitopedia</h1>
        {/* Description */}
        <h2 className="font-primary text-2xl font-medium my-3">Find any mosquito, anytime.</h2>
        {/* Home Search Form */}
        <form className="my-8 w-full flex justify-center items-center">
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
      </div>
      {/* Cards Section Wrapper */}
      <div className="mx-32">
        {/* Title */}
        <p className="my-5 text-xl font-medium">Recently Added</p>
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
      {/* Call to Action */}
      <div className="w-full p-20 my-14 mb-10 bg-gray-50  flex flex-col justify-center items-center">
        <p className="text-4xl font-primary font-medium">Join the Mosquito Hunt 🦟</p>
        <button className="bg-blue-500 border border-blue-600 text-white text-lg px-4 py-2 mt-5 rounded-3xl hover:cursor-pointer">Join ➡</button>
      </div>
      {/* 
        📊 Contribution Stats
        -------------------------
        • 🧑‍🤝‍🧑 234 Users Registered
        • 🪦 1,054 Mosquitoes Eliminated
        • 🧬 76 Families Created

        💬 User Testimonials
        -------------------------
        🗣️ "Finally got revenge on the 2am mosquito 😤" – Tiger  
        🗣️ "It’s like Pokémon but itchier" – Dev Singh  
        🗣️ "10/10 would squash again" – Anjali 
        */}

    </>
  );
};