import React, { FC } from "react";
import styles from "./HeaderSection.module.scss";
import { Link, NavLink } from "react-router-dom";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => (
  <div className={styles.HeaderSection}>
    <div className={styles.CompanyLogo}>
      <Link to="/">
        <img src="images/company-logo.svg" alt="company logo" />
      </Link>
    </div>

    <div className={styles.TabButtonWrap}>
      <nav>
        <ul className={styles.TabWrap}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <li className="mid">Home</li>
            <div className={styles.border}></div>
          </NavLink>

          <NavLink
            to="/VaLoansPage"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <li className="mid">VA Loans</li>
            <div className={styles.border}></div>
          </NavLink>

          <NavLink
            to="/AboutUsPage"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <li className="mid">About</li>
            <div className={styles.border}></div>
          </NavLink>

          <NavLink
            to="/HomeBuyingProgramPage"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <li className="mid">Home Buying</li>
            <div className={styles.border}></div>
          </NavLink>
        </ul>
      </nav>

      <button className={styles.HeaderButton}>
        <div className="md">Contact Us</div>
      </button>
    </div>
  </div>
);

export default HeaderSection;
