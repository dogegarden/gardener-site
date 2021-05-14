import { FunctionComponent } from "react";
import { NavBarProps } from "../../types";
import Image from "next/image";
import Styles from "../../styles/Fonts.module.css";

export const Nav: FunctionComponent<NavBarProps> = ({
  profileImgUrl,
  hasPremium,
}): JSX.Element => {
  return (
    <div className='group'>
      <div className="pt-10 border-black ">
        <div className="flex justify-end ...">
          {!hasPremium && (
            <section className="text-green-lime pt-3 pl-10  group-hover:animate-bounce">
              <label className={Styles.InterM}>Get Premium</label>
            </section>
          )}
          <section className="pl-10 pr-10">
            <Image
              className="rounded-full"
              src={profileImgUrl}
              width={50}
              height={50}
            />
          </section>
        </div>
      </div>
    </div>
  );
};
