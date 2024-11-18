import { useState } from "react";
import OffersCard from "./OffersCard";
import usersdata from "@/mock/userlistdata";

interface CollapsibleCardProps {
  title: string;
  subtitle?: string;
  offersData: any; // Array of objects for the collapsible content
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  subtitle,
  offersData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-custom rounded-[15px]">
      {/* Header */}
      <div
        className="flex justify-between items-center py-2 px-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="font-semibold text-sm text-black">{title}</span>
          {subtitle && (
            <span className="text-xs text-gray-600"> - {subtitle}</span>
          )}
        </div>
        <span
          className={`w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform duration-300 ${
            isOpen ? "rotate-[-135deg]" : ""
          }`}
        />
      </div>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        {/* Offerscard */}
        <div className="px-2 overflow-auto max-h-[200px]">
          <OffersCard data={offersData} />
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
