import SectionHeader from "@mosquitopedia/ui/components/home/sectionHeader";
import ReviewCard, { ReviewCardTypeList } from "@mosquitopedia/ui/components/card/reviewCard";

export default function Reviews() {
  const reviewCardData: ReviewCardTypeList = [
    {
      review:
        "Finally, a place to immortalize my nemeses! RIP Buzz McFlighty. You were a worthy opponent.",
      username: "MosquitoSlayer99",
    },
    {
      review:
        "My roommate thinks I'm crazy, but my collection is legendary. 47 documented kills and counting!",
      username: "SwatterPro",
    },
    {
      review: "10/10 would squash again. Love tracking my stats and seeing my ranking climb!",
      username: "BuzzKiller",
    },
  ];
  return (
    <>
      <section className="bg-sectionsecondary">
        <div className="section-wrapper">
          {/* Section Header */}
          <SectionHeader
            title="What Hunters Are Saying"
            description="Real reviews from real mosquito hunters"
          />
          {/* Body */}
          <div className="mx-auto mt-8 grid w-4xl grid-cols-3 gap-5">
            {reviewCardData.map((item, idx) => (
              <ReviewCard key={idx} review={item.review} username={item.username} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
