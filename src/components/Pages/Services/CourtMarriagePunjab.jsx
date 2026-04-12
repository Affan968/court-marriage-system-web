import ServiceLayout from "./ServicesLayout"

const CourtMarriagePunjab = () => {
  return (
    <ServiceLayout 
      city="Punjab"
      description="Expert legal aid for court marriages across all major cities of Punjab. We cover Lahore, Faisalabad, and Multan under Punjab Family Laws."
      courtName="Relevant District Courts of Punjab"
      jurisdiction={["Lahore High Court Jurisdiction", "Punjab Family Laws Amendment Act", "Local Government MRC Services"]}
    />
  );
};
export default CourtMarriagePunjab;