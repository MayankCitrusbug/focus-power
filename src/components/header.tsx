import React from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { icons } from "@/assets/icons";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-10 flex items-center gap-6 justify-end border-b border-[var(--fp-purple-light)]">
      <button>
        <Image src={icons.paperPlaneSvg} alt="messages icon" />
      </button>
      <button>
        <Image src={icons.bellSvg} alt="notification icon" />
      </button>
      <div className="flex items-center gap-2">
        <Image src={images.matildaImg} width={32} height={32} alt="matilda avatar" />
        <select className="bg-inherit sb-caption-3" name="" id="">
          <option value="">Matilda Stone</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
