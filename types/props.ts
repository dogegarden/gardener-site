import { Room, ClientAccount, User } from "./interfaces";

// PAGE PROPS

/**
 ** Expected Props For Dashboard
 * !All fields Are Required
 */
export interface DashboardProps {
      content: DashboardPropType
}

export interface DashboardPropType {
  clientAccount: ClientAccount 
  session: {
    quededSongs: string[];
  };
  roomInfo: Room;
}

//COMPONENT PROPS

/**
 *@requires Profile Imagw URL
 */
export interface NavBarProps {
    profileImgUrl: string
    hasPremium: boolean
}

export interface RoomInfoCardProps extends Room {}

