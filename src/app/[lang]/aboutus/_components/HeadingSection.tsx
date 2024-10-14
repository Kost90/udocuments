import SectionContainer from "@/components/containers/Container";
import {Paragraph} from "@/components/typography/Typography";
import {UDocumentData} from "@/constants/types";

function HeadingSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-sectionBg h-full w-full pt-32 md:pt-[185px] pb-28 border-b border-b-slate-400"
                          ariaLabelledby="section-heading">
            <div className="flex flex-col gap-6 justify-start items-start pt-10 md:py-20">
                <h1
                    id="section-heading"
                    className="text-large-mobile lg:text-large-desktop text-orange font-semibold lg:leading-[40px] leading-9"
                >
                    {lang.aboutUsPage.headingSection.title}
                </h1>
                <Paragraph
                    text={lang.aboutUsPage.headingSection.paragraph}
                    className="mt-3"
                />
            </div>
        </SectionContainer>
    );
}

export default HeadingSection;
