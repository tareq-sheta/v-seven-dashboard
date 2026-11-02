import React from "react";
import { useMatches } from "react-router-dom";
import styles from "./MainContent.module.scss";
import TypeFilter from "../TypeFilter/TypeFilter";

interface RouteHandle {
  title?: (params: Record<string, string | undefined>) => string;
  showTypeFilter?: boolean;
}

function MainContent({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const handle = currentMatch?.handle as RouteHandle | undefined;

  const pageTitle =
    handle?.title && currentMatch && currentMatch.params
      ? handle.title(currentMatch.params as Record<string, string | undefined>)
      : "";
  const showTypeFilter = currentMatch?.pathname === "/dashboard";

  return (
    <div className={styles.mainContent}>
      <div className={styles.dashboardHead}>
        <p className={styles.dashboardHeader}>{pageTitle}</p>
        {showTypeFilter && <TypeFilter />}
      </div>
      {children}
    </div>
  );
}

export default MainContent;
