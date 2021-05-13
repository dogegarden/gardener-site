import { FunctionComponent } from "react";
import { NavBarProps } from "../../types";
import Image from "next/image";
import Styles from '../../styles/Fonts.module.css'

export const Nav: FunctionComponent<NavBarProps> = ({
  profileImgUrl,
  hasPremium,
}): JSX.Element => {
  return (
    <div className='pt-10'>
      <div className=" grid grid-cols-3 gap-2 justify-items-end">
        {!hasPremium && (
          <section className='text-green-lime'>
            <label className={Styles.InterM} >Get Premium</label>
          </section>
        )}
        <section className=''>
          <Image className='rounded-full' src={profileImgUrl} width={50} height={50} />
        </section>
      </div>
    </div>
  );
};
