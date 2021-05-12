import HomeIcon from '@material-ui/icons/Home';

export const CommandData = [
  {
    header: 'Welcome',
    place: '#welcome',
    icon: <HomeIcon />,

    items: [
      {
        title: 'Welcome | Public',
        defaultSwitch: false,
        description: 'Sends welcome messages to new comers publicly in chat.',
      },
      {
        title: 'Welcome | Private ',
        defaultSwitch: true,
        description: 'Whispers welcome messages to new comers.',
      },
    ],
  },
  {
    header: 'Moderation',
    place: '#moderation',
    icon: <HomeIcon />,

    items: [
      {
        title: 'Normal Room Ban',
        defaultSwitch: true,
        description: 'Bans user from room using ID of user.',
      },
      {
        title: 'IP Room Ban',
        defaultSwitch: false,
        description: 'Bans user from room using IP of the user.',
      },
      {
        title: 'Chat Ban',
        defaultSwitch: true,
        description: 'Bans user from chat of the room',
      },
      {
        title: 'Kick',
        defaultSwitch: false,
        description: 'Kicks user from room',
      },
      {
        title: 'Push Listener',
        defaultSwitch: false,
        description: 'Puts user back into listeners section.',
      },
      {
        title: 'Mod',
        defaultSwitch: true,
        description: 'Gives moderation role.',
      },
      {
        title: 'Auto-Mod',
        defaultSwitch: true,
        description: 'Auto-Mods a certain user whenever they are in the room.',
      },
      {
        title: 'Unmod',
        defaultSwitch: true,
        description: 'Takes moderation role back.',
      },
      {
        title: 'Auto-Speaker',
        defaultSwitch: false,
        description:
          'Automatically puts a certain in speaker section user whenever they are in the room.',
      },
      {
        title: 'Block Bots',
        defaultSwitch: false,
        description: 'Blocks bots from coming to the room. Human only.',
      },
    ],
  },
  {
    header: 'Roles',
    place: '#roles',
    icon: <HomeIcon />,

    items: [
      {
        title: 'Creator',
        defaultSwitch: true,
        description: 'Gives the creator of the room creator role.',
      },
      {
        title: 'Assistant',
        defaultSwitch: true,
        description: 'Gives an user of the room assistant role.',
      },
      {
        title: 'Speaker',
        defaultSwitch: true,
        description: 'Gives the speaker/s of the room speaker role.',
      },
      {
        title: 'Manager | Top Assistant',
        defaultSwitch: true,
        description: 'Gives an user of the room manager role.',
      },
      {
        title: 'Event Organizer',
        defaultSwitch: true,
        description: 'Gives an user of the room even organizer role.',
      },
      {
        title: 'Showman',
        defaultSwitch: true,
        description: 'Gives a speaker of the room Showman role.',
      },
    ],
  },
  {
    header: 'Interactives',
    place: '#interactives',
    icon: <HomeIcon />,

    items: [
      {
        title: 'Link',
        defaultSwitch: true,
        description: 'Create links!',
      },
      {
        title: 'Form',
        defaultSwitch: true,
        description: 'Create forms!',
      },
    ],
  },
];
