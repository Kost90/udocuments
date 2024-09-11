import ApproachSection from "@/components/ApproachSection/ApproachSection";
import {string} from "zod";

interface HomePageMetaData {
    title: {
        default: string;
        template: string;
    };
    description: string;
    keywords: string;
    author: {
        name: string;
        url: string;
    };
    icons: {
        icon: string;
    };
    openGraph: {
        title: string;
        description: string;
        type: string;
        locale: string;
        url: string;
        siteName: string;
    };
}

interface Link {
    lable: string;
    href: string;
}

interface Header {
    main: string;
    aboutus: string;
    contacts: string;
    services: {
        lable: string;
        link: Link[];
    };
}

interface Modal {
    title: string;
    paragraph: string;
    cancel: string;
    send: string;
    label: {
        name: string;
        phone: string;
    };
    placeholders: {
        name: string;
        phone: string;
    };
}

interface ButtonText {
    consultations: string;
    cancel: string;
    send: string;
}

interface FirstSection {
    title: string;
    paragraph: string;
    callBack: string;
}

interface CardsData {
    id: string;
    image: string;
    description: string;
}

interface TeamMember {
    id: string;
    name: string;
    image: string;
    role: string;
}

interface SecondSection {
    title: string;
    paragraph: string;
    cardsData: CardsData[];
    carouselData: { teamArray: TeamMember[] };
}

interface CardDataThirdSection {
    id: string;
    title: string;
    href: string;
    description: string;
}

interface ThirdSection {
    title: string;
    paragraph: string;
    cardData: CardDataThirdSection[];
}

interface ApproachSection {
    id: string;
    svgIcone: string;
    description: string;
}

interface ConsultationSection {
    title: string;
    paragraph: string;
}

type OurPartnersSection = {
    title: string;
}

type contactData = {
    id: string;
    svgIcone: string;
    title: string;
    contact: string;
}

interface ContactsSection {
    contactData: contactData[];
    title: string;
    paragraph: string;
}

type HeadingSection = {
    title: string;
    paragraph: string;
}

type OurHistorySection = {
    title: string;
    paragraph: string;
}

type OurTeamSection = {
    title: string;
    paragraph: string;
}

interface AboutUsPage {
    headingSection: HeadingSection;
    ourHistorySection: OurHistorySection;
    ourTeamSection: OurTeamSection;
}

export interface UDocumentData {
    homePageMetaData: HomePageMetaData;
    header: Header;
    modal: Modal;
    buttonText: ButtonText;
    firstSection: FirstSection;
    secondSection: SecondSection;
    thirdSection: ThirdSection;
    aproachSection: ApproachSection[];
    consultationSection: ConsultationSection,
    ourPartnersSection: OurPartnersSection,
    contactsSection: ContactsSection;
    aboutUsPage: AboutUsPage;
}
