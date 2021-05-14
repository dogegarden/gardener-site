import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { StaticDashboardData } from '../../Request/static'
import { DashboardPropType } from "../../types";

const DashboardContext = createContext(null);

const DashboardProvider = ({ children }): JSX.Element => {
  const { Provider } = DashboardContext;
  const [content, setContent] = useState<DashboardPropType>();
    useEffect(() => setContent(StaticDashboardData),[])
  return <Provider value={{ content, setContent }}>{children}</Provider>;
};

export { DashboardContext, DashboardProvider };
