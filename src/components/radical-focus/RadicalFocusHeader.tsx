import { icons } from "@/assets/icons";
import PrimaryIconBtn from "../elements/PrimaryIconBtn";

const RadicalFocusHeader: React.FC = () => {
  const handleClick = () => {
    console.log("radial focus setting")
  }
  return (
    <div className="flex justify-between pt-10 pb-2 px-10">
      <h4 className="heading-4">My Radical Focus</h4>
      <PrimaryIconBtn icon={icons.gearSixSvg} alt="Settings icon" text="Radical Focus Settings" onClick={handleClick} />
    </div>
  );
}

export default RadicalFocusHeader;
