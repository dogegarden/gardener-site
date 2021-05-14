import { useContext } from "react";
import Image from "next/image";
import { FunctionComponent } from "react";
import { DashboardContext } from "../context";
import { DashboardPropType, RoomInfoCardProps } from "../../types";
import { useEffect } from "react";
import Styles from "../../styles/Fonts.module.css";
import { useState } from "react";
import { User } from "../../types";

// Dj Compnent, Displays All Djs
const UserRow: FunctionComponent<User> = ({
  displayName,
  profileImgUrl,
}): JSX.Element => {
  return (
    <div className="flex pl-3">
      <section className="">
        <Image
          className="rounded-full"
          src={profileImgUrl}
          width={25}
          height={25}
        />
      </section>
      <section className="text-gray-light text-xl pl-6">
        <label>{displayName}</label>
      </section>
    </div>
  );
};

const DJCard = (): JSX.Element => {
  const { content } = useContext(DashboardContext);
  const {
    roomInfo: { AuxHost },
  } = content as DashboardPropType;
  const [hasDj, setHasDj] = useState<boolean>();

  useEffect(() => {
    AuxHost.length > 0 ? setHasDj(true) : setHasDj(false);
  }, []);

  return hasDj ? (
    <div className="">
      <div className={Styles.InterSB}>
        <section className="pt-7 text-xl">
          <label className="text-gray-light text-3xl"> DJs </label>
        </section>
        <div className="pt-7">
          {AuxHost.map(({ displayName, profileImgUrl, id }, key) => (
            <UserRow
              displayName={displayName}
              profileImgUrl={profileImgUrl}
              key={key}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>No DJS</div>
  );
};

// Calculates All Users
const userCountCalc = (listeners: number, speakers: number): number =>
  listeners + speakers;

export const RoomInfoCard = (): JSX.Element => {
  const { content } = useContext(DashboardContext);
  const {
    roomInfo: { listenerCount, speakerCount, botCount, upTime },
  } = content as DashboardPropType;
  const UserCount = userCountCalc(
    listenerCount as number,
    speakerCount as number
  );
  return (
    <div className=" row-span-5 text-3x bg-blue-materialLightBlue rounded-xl">
      <div className="p-7 text-xl">
        <div className={Styles.InterSB}>
          <section>
            <label className="text-gray-light text-3xl"> Room Info </label>
          </section>
          <section className="pt-5">
            <span>Users: </span>
            <span className=" font-bold">{UserCount}</span>
          </section>
          <div></div>
          <section className="pt-2">
            <span>Speakers: </span>
            <span className=" font-bold">{speakerCount}</span>
          </section>
          <section className="pt-2">
            <span>Listener: </span>
            <span className=" font-bold">{listenerCount}</span>
          </section>
          <section className="pt-2">
            <span>Bot Count: </span>
            <span className=" font-bold">{botCount}</span>
          </section>
          <section className="pt-2">
            <span>Uptime: </span>
            <span className=" font-bold">{upTime}</span>
          </section>
        </div>
        <DJCard />
      </div>
    </div>
  );
};
