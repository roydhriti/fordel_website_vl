import React, { FC } from 'react';
import styles from './CompanyHistorySection.module.scss';

interface CompanyHistorySectionProps {}

const CompanyHistorySection: FC<CompanyHistorySectionProps> = () => (
  <div className={styles.CompanyHistorySection}>
    CompanyHistorySection Component
  </div>
);

export default CompanyHistorySection;
