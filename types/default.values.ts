import { DashboardPropType } from './props'

export const DashboardPropDefaultVal: DashboardPropType = {
    clientAccount: {
        id:'',
        displayName:'',
        profileImgUrl: '',
        hasPremium: false,
        username: '',
    },
    session: {
        quededSongs:[]
    },
    roomInfo: {
        id:'',
        title: 'Code And Chill',
        listenerCount: 0,
        speakerCount: 20,
        botCount:0,
        upTime: '0 minutes',
        AuxHost: []
    }
}
