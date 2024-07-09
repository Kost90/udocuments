import SectionContainer from "../containers/Container";
import Image from "next/image";
import WebflowIcon from "../../../public/assets/webflow_icon.svg";
import RelumeIcon from "../../../public/assets/relum_icon.svg";
import { Paragraph } from "../typography/Typography";

const iconsArr = [WebflowIcon, RelumeIcon, WebflowIcon, RelumeIcon];

function SixSection() {
  return (
    <SectionContainer className="h-full bg-cream py-10 md:py-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <Paragraph text="Нам довіряють провідні компанії з усієї країни" className="!text-black font-semibold"/>
        <div className="flex flex-row justify-center items-center gap-10 flex-wrap">
          {iconsArr.map((el, i) => (
            <Image src={el} alt="icon" key={i}/>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default SixSection;
