import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BugReportIcon from '@material-ui/icons/BugReport';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const closeOpen = {
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
}

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <HomeIcon />,
    closeOpen,

    subNav: [
      {
        title: 'Join Room',
        path: '/dashboard/join',
      },
      {
        title: 'Info',
        path: '/dashboard/info',
      }
    ]
  },
  {
    title: 'Modules',
    path: '/modules',
    icon: <ViewModuleIcon />,
  },
  {
    title: 'Commands',
    path: '/commands',
    icon: <AccountTreeIcon />,
    closeOpen,

    subNav: [
      {
        title: 'Announcements',
        path: '/commands/announcements',
        icon: <EmojiFlagsIcon/>
      },
      {
        title: 'Moderation',
        path: '/commands/moderation',
        icon: <GavelIcon />
      },
      {
        title: 'Roles',
        path: '/commands/roles',
        icon: <SupervisorAccountIcon/>
      },
      {
        title: 'Fun',
        path: '/commands/fun',
        icon: <EmojiEmotionsIcon/>
      },
      {
        title: 'Tags',
        path: '/commands/tags',
        icon: <LocalOfferIcon/>
      },
      {
        title: 'Welcome',
        path: '/commands/welcome',
        icon: <EmojiPeopleIcon/>
      }
    ]
  },
  {
    title: 'Report',
    path: '/report',
    icon: <BugReportIcon />
  },
  {
    title: 'Premium',
    path: '/premium',
    icon: <LocalAtmIcon />
  },
];