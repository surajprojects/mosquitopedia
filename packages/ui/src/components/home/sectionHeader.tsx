export interface SectionHeaderType {
  title: string;
  description: string;
}

export type SectionHeaderTypeList = SectionHeaderType[];

export default function SectionHeader({
  title = "title",
  description = "description",
}: Partial<SectionHeaderType>) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <h4 className="font-heading text-center text-3xl font-bold">{title}</h4>
        <p className="text-center text-sm text-secondary">{description}</p>
      </div>
    </>
  );
}
