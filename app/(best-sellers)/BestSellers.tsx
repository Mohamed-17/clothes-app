import SectionTitle from "@/components/SectionTitle";
import Sellers from "./Sellers";
function BestSellers() {
  return (
    <div>
      <SectionTitle sub={"Our"} title={"Best Sellers"} />
      <div className="mt-10 flex justify-center items-center">
        <Sellers />
      </div>
    </div>
  );
}

export default BestSellers;
