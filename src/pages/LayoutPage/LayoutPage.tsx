import React, { FC } from "react";
import styles from "./LayoutPage.module.scss";
import HeaderSection from "../../shared/components/HeaderSection/HeaderSection";
import FooterSection from "../../shared/components/FooterSection/FooterSection";
import { Outlet } from "react-router-dom";

interface LayoutPageProps {}

const LayoutPage: FC<LayoutPageProps> = () => (
  <div className={styles.LayoutPage}>
    <HeaderSection />

    <Outlet />

    <FooterSection />
  </div>
);

export default LayoutPage;
