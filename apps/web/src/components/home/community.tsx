import Card, { CardTypeList } from "@mosquitopedia/ui/components/card/card";
import SectionHeader from "@mosquitopedia/ui/components/home/sectionHeader";

export default function Community() {
  const cardsData: CardTypeList = [
    {
      icon: "Bug",
      title: "12,847",
      description: "mosquitoes documented",
    },
    {
      icon: "Users",
      title: "3,421",
      description: "active hunters",
    },
    {
      icon: "FolderTree",
      title: "23",
      description: "families discovered",
    },
  ];
  return (
    <>
      <section className="bg-sectionsecondary">
        <div className="section-wrapper">
          {/* Section Header */}
          <SectionHeader
            title="Our Community Impact"
            description="Join thousands of hunters documenting mosquitoes around the world"
          />
          {/* Body */}
          <div className="mx-auto mt-8 flex w-full flex-col gap-6 md:flex-row xl:w-5xl">
            {cardsData.map((item, idx) => (
              <Card key={idx} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
