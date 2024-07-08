import { Paragraph } from "../../typography/Typography";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Image, { StaticImageData } from "next/image";

type IProps = {
  image: StaticImageData | string;
  description: string;
};

function CardSecondSection({ ...props }: IProps) {
  return (
    <Card className="bg-cardTransparent border border-orange h-full sm:h-[230px] w-full sm:max-w-[430px] flex items-center flex-col justify-center p-2">
      <CardContent>
        <Image src={props.image} alt="time_managment_icon" />
      </CardContent>
      <CardFooter>
        <Paragraph text={props.description} className="text-center"/>
      </CardFooter>
    </Card>
  );
}

export default CardSecondSection;
