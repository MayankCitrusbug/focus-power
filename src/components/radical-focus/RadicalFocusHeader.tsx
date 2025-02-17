import { icons } from "@/assets/icons";
import PrimaryIconBtn from "../elements/PrimaryIconBtn";

const RadicalFocusHeader: React.FC = () => {
  const handleClick = () => {
    console.log("radial focus setting")
  }
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 pt-3 sm:pt-5 md:pt-7 xl:pt-10 px-3 sm:px-5 md:px-7 xl:px-10">
      <h4 className="heading-4">My Radical Focus</h4>
      <PrimaryIconBtn icon={icons.gearSixSvg} alt="Settings icon" text="Radical Focus Settings" onClick={handleClick} />
    </div>
  );
}

export default RadicalFocusHeader;
