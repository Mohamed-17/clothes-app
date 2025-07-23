import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";

import Menu from "./Menu";
import { ProductRelastions } from "@/types/type";

function SellersItem({ item }: { item: ProductRelastions }) {
  return (
    <li className="flex justify-center items-center ">
      <Card className="w-90 h-90 flex justify-center items-center">
        <CardHeader className="relative w-60 h-60">
          <Image
            src={item.image}
            alt={item.name}
            loading="lazy"
            fill
            quality={100}
          />
        </CardHeader>
        <CardContent className="w-full px-10">
          <div className="flex justify-between">
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm ">{formatCurrency(item.basePrice)}</div>
          </div>
        </CardContent>
        <CardFooter>
          <Menu item={item} />
        </CardFooter>
      </Card>
    </li>
  );
}

export default SellersItem;
