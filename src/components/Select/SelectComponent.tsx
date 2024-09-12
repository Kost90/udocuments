import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {UDocumentData} from "@/constants/types";

type SelectProps = {
    name: string;
    label: string;
    lang: UDocumentData;
};

function SelectComponent({...props}: SelectProps) {
    return (
        <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label className="text-base text-cream">{props.label}</label>
            <Select name={props.name}>
                <SelectTrigger className="w-full bg-cream">
                    <SelectValue
                        placeholder={props.lang.contactsSection.formContactSection.form.textareaMessage.select.placeholder}/>
                </SelectTrigger>
                <SelectContent className="bg-cream">
                    <SelectGroup>
                        <SelectLabel className="text-base text-black">
                            {props.lang.contactsSection.formContactSection.form.textareaMessage.select.choose}
                        </SelectLabel>
                        <SelectItem
                            value="Послуги з оформлення нерухомості"
                            className="cursor-pointer"
                        >
                            {props.lang.contactsSection.formContactSection.form.textareaMessage.select.propertyValue}
                        </SelectItem>
                        <SelectItem
                            value="Послуги адвоката, супровід бізнесу"
                            className="cursor-pointer"
                        >
                            {props.lang.contactsSection.formContactSection.form.textareaMessage.select.advocateValue}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default SelectComponent;
