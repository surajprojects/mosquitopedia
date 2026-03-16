import SectionHeader from "@mosquitopedia/ui/components/home/sectionHeader";

export default function Community() {
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
        </div>
      </section>
    </>
  );
}
