import Image from "next/image";
import Styles from "../../styles/Fonts.module.css";

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-center pt-10">
      <img src="/doge.png" style={{ width: "75px", height: "75px" }} />
      <div className=' text-gray-light text-3xl pt-5 pl-6'>
        <label className={Styles.InterM}>Gardener</label>
      </div>
    </div>
  );
};

export const LeftPannel = (): JSX.Element => {
  return (
    <div className=" bg-gray-midnight bg-mid w-10/10 h-screen">
      <Header />
    </div>
  );
};
