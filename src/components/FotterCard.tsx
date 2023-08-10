import { TbMathXDivideY2 } from "react-icons/tb";

type FotterCardProps = {
  title: string;
  description: string;
};

export default function FotterCard({ title, description }: FotterCardProps) {
  return (
    <div className="w-100 ml-3 flex flex-row pt-3">
      <button>
        <TbMathXDivideY2 />
      </button>
      <div className="pl-4">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
