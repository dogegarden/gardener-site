import { FunctionComponent } from "react";
import {
  DashboardProps,
  DashboardPropType,
  DashboardPropDefaultVal,
} from "../types";
import { DashboardContext, DashboardProvider } from "./context/index";
import { Nav, LeftPannel, DashBoardContent } from "./components";
import { fetchDashboard } from "../Request";
import { createContext, useState, useContext, useEffect } from "react";

// Contexr To Distribute Data Without Prop Drilling

// Dash Compnent
const Dashboard: FunctionComponent<DashboardProps> = ({
  content,
}): JSX.Element => {
  const { hasPremium, profileImgUrl } = content.clientAccount;
  const { content: PageContent, setContent } = useContext(DashboardContext);
  const [didLoad, setDidLoad] = useState<boolean>(false);

  useEffect(() => {
    console.log("setting this ", content);
    setContent(content);
    setDidLoad(true);
  }, []);
  return didLoad ? (
    <div className='overflow-y-hidden'>
      <div className="grid grid-rows-0 grid-cols-4 gap-4">
        <div className="row-span-1 ...">
          <LeftPannel />
        </div>
        <div className="col-span-3 min-h-screen ...">
          <Nav hasPremium={hasPremium} profileImgUrl={profileImgUrl} />
          <DashBoardContent />
        </div>
      </div>
    </div>
  ) : (
    <div>No Content</div>
  );
};

export default ({ content }) => {
  return (
    <DashboardProvider>
      <Dashboard content={content} />
    </DashboardProvider>
  );
};

// Fetch Dash Data
export const getServerSideProps = async (context) => {
  const result: DashboardPropType = await fetchDashboard("");

  return {
    props: {
      content: result,
    },
  };
};
