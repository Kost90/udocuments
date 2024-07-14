import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectProps = {
  name: string;
  label: string;
};

function SelectComponent({ ...props }: SelectProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <label className="text-base text-cream">{props.label}</label>
      <Select name={props.name}>
        <SelectTrigger className="w-full bg-cream">
          <SelectValue placeholder="теми:" />
        </SelectTrigger>
        <SelectContent className="bg-cream">
          <SelectGroup>
            <SelectLabel className="text-base text-black">
              оберіть одну
            </SelectLabel>
            <SelectItem
              value="Послуги з оформлення нерухомості"
              className="cursor-pointer"
            >
              Послуги з оформлення нерухомості
            </SelectItem>
            <SelectItem
              value="Послуги адвоката, супровід бізнесу"
              className="cursor-pointer"
            >
              Послуги адвоката, супровід бізнесу
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectComponent;
