import Image from "next/image";
import SectionContainer from "@/components/containers/Container";
import {Paragraph, Titel} from "@/components/typography/Typography";
import Picture from "../../../../../public/assets/our_history_image.png";
import {UDocumentData} from "@/constants/types";

function OurHistirySection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-light-gradient h-full w-full py-20 md:py-32 border-b border-b-slate-400">
            <div
                className="flex flex-col lg:flex-row justify-between items-start gap-6"
                aria-labelledby="heading-our-history-section"
            >
                <div className="flex flex-col gap-6 justify-start items-start">
                    <Titel
                        text={lang.aboutUsPage.ourHistorySection.title}
                        id="heading-our-history-section"
                        className="leading-9"
                    />
                    <Paragraph text={lang.aboutUsPage.ourHistorySection.paragraph}/>
                </div>
                <div className="flex">
                    <Image
                        src={Picture}
                        alt="Наші юристи на роботі"
                        className="max-w-full md:max-w-[520px] lg:max-w-[640px]"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}

export default OurHistirySection;
