import TopBar from "@/components/Topbar/TopBar";
import React from "react";

type Props = {};

const ProblemsPage = (props: Props) => {
  return (
    <div>
      <TopBar problemsPage={true} />
    </div>
  );
};

export default ProblemsPage;
