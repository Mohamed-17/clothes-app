import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";
import { ProductRelastions } from "@/types/type";
import Image from "next/image";
function Menu({ item }: { item: ProductRelastions }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="bg-[#5c1f2d] text-white cursor-pointer"
          >
            Ckeck Out
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[400px] md:max-w-[425px]">
          <DialogHeader className="relative  h-60 flex justify-center items-center flex-col w-full">
            <Image
              src={item.image}
              alt={item.name}
              loading="lazy"
              width={300}
              height={150}
              quality={100}
              className="w-50 h-40"
            />
            <DialogTitle className="mt-2">{item.name}</DialogTitle>
            <DialogDescription>{item.description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <h4 className="w-full text-center font-semibold">
              Pick Your Size{" "}
            </h4>
            <RadioGroup defaultValue="option-one" className="space-y-2">
              {item.size.map((size) => (
                <div className="flex items-center space-x-2" key={size.id}>
                  <RadioGroupItem value={size.name} id={size.name} />
                  <Label className="flex gap-3">
                    <span>{size.name}</span>
                    <span>{formatCurrency(size.price + item.basePrice)}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Colors colors={item.colors} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Colors({ colors }: any) {
  return (
    <div className="space-y-3 border-gray-50 mt-5">
      <h4 className="w-full text-center font-semibold">Pick your color</h4>
      {/* {<Checkbox id="terms" value={"white"} />
      <label htmlFor=""> color</label>} */}
      <div className="space-y-3">
        {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {colors.map((color: any) => (
          <div key={color.id} className="flex items-center justify-start gap-2">
            <Checkbox
              id={color.name.toLowerCase()}
              value={color.name.toLowerCase()}
              disabled={!color.available}
            />
            <label
              htmlFor={color.name.toLowerCase()}
              className="space-x-2 w-full"
            >
              {color.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Menu;
