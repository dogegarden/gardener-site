import { GetStaticProps, GetStaticPropsContext } from "next";
import { FunctionComponent } from "react";
import {
  DashboardProps,
  DashboardPropType,
  DashboardPropDefaultVal,
} from "../types";
import { Nav } from "./components";
import { fetchDashboard } from "../Request";
import { createContext } from "react";

// Contexr To Distribute Data Without Prop Drilling
const DashboardContext = createContext<DashboardPropType>(
  DashboardPropDefaultVal
);


// Dash Compnent
const Dashboard: FunctionComponent<DashboardProps> = ({
  content,
}): JSX.Element => {
  const { hasPremium, profileImgUrl } = content.clientAccount;
  return (
    <div>
      <Nav hasPremium={hasPremium} profileImgUrl={profileImgUrl} />
      <div></div>
    </div>
  );
};
export default Dashboard;


// Fetch Dash Data
export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const result: DashboardPropType = await fetchDashboard(id.toString());

  return {
    props: {
      content: result,
    },
  };
};
