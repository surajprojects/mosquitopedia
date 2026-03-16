import MosquitoCard from "@mosquitopedia/ui/components/mosquito/mosquitoCard";

export default function RecentlyDocumented() {
  return (
    <>
      <section className="bg-section">
        <div className="section-wrapper">
          <p className="font-heading mb-6 text-3xl font-bold">Recently Documented</p>
          <div className="grid grid-cols-3 gap-6">
            <MosquitoCard />
            <MosquitoCard />
            <MosquitoCard />
            <MosquitoCard />
            <MosquitoCard />
            <MosquitoCard />
          </div>
        </div>
      </section>
    </>
  );
}
