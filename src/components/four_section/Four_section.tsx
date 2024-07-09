import SectionContainer from "../containers/Container";
import FolderIcon from "../../../public/assets/folder-icone.svg";
import ShieldIcon from "../../../public/assets/shield_icone.svg";
import HandsIcone from "../../../public/assets/hands_cone.svg";
import Image from "next/image";
import { Paragraph } from "../typography/Typography";
import { Separator } from "../ui/separator";

const sectionData = [
  {
    id: "firstEl",
    svgIcone: FolderIcon,
    description:
      "Сучасний підхід до надання високоякісних послуг у галузі оформлення нерухомості.",
  },
  {
    id: "secondtEl",
    svgIcone: ShieldIcon,
    description: "Захист прав та інтересів наших клієнтів – наш пріоритет.",
  },
  {
    id: "firstEl",
    svgIcone: HandsIcone,
    description:
      "Дотримання термінів надання послуг відповідно до укладеного договору.",
  },
];

function FourSection() {
  return (
    <SectionContainer className="bg-general-gradient h-full border-y border-y-cream py-10 md:py-20">
      <div className="flex flex-col justify-start items-start gap-5">
        {sectionData.map((el, i) => (
          <div key={el.id}>
            <div
              className="flex flex-row justify-start items-center gap-5"
            >
              <Image src={el.svgIcone} alt="svg_icon" />
              <Paragraph text={el.description} />
            </div>
            {i < 2 ? (
              <Separator orientation="vertical" className="m-4 h-14 md:h-20" />
            ) : null}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default FourSection;
