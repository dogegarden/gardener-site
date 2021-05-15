import { useEffect } from "react";
import { useContext } from "react";
import { DashboardPropType, DashboardProps } from "../../types";
import { RoomInfoCard } from './cards'


export const DashBoardContent = (): JSX.Element => {


  return (
    <div className="mt-20 3xl:pl-20 pl-10 ">
      <div className='grid grid-cols-10 grid-rows-2'>
        <div className=' row-span-2 col-span-3' >
        <RoomInfoCard/>
        </div>
      </div>
    </div>
  );
};
