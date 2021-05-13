/**
 ** Contains All Relevanr Rooms
 */
export interface Room {
  id: string;
  listenerCount: number;
  speakerCount: number;
  botCount: number;
  upTime: string;
//Users allowed to manipulate songs
  AuxHost: User[];
}

/**
 * *Contains All Necessary User Info
 */
export interface User {
  profileImgUrl: string;
  displayName: string;
  id: string;
}

export interface ClientAccount {
  id: string
  profileImgUrl?: string
  hasPremium?: boolean
  displayName?: string
  username?: string
}
