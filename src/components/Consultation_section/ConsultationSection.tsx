import SectionContainer from "../containers/Container";
import {Paragraph} from "../typography/Typography";
import Button from "../ui/Button";
import Link from "next/link";
import {UDocumentData} from "@/constants/types";

function ConsultationSection({lang}: { lang: UDocumentData }) {

    return (
        <SectionContainer className="bg-sectionBg h-full py-10 md:py-32" ariaLabelledby="consultation-section-title">
                <div
                    className="flex flex-col items-center justify-center gap-10 my-5 md:my-0"
                >
                    <Paragraph
                        text={lang.consultationSection.paragraph}
                        className="lg:leading-[34px]"
                        aria-label="Schedule a free consultation with our lawyers to get the necessary assistance."
                    />
                    <Button type="button" aria-label="Schedule Consultation">
                        <Link href={`?modal=true`}>{lang.buttonText.consultations}</Link>
                    </Button>
                </div>
        </SectionContainer>
    );
}

export default ConsultationSection;
