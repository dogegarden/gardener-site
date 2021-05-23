 import { DashboardProps, DashboardPropType } from '../../../types'
import { StaticDashboardData } from '../static'

/**
 * *Queries All Dashboard Content
 * @param uuid 
 * @returns Dashboard Prop
 */
 export const fetchDashboard = async(uuid: string): Promise<DashboardPropType> => {
    return StaticDashboardData
}
