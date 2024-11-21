import React, { FC } from 'react';
import styles from './FeaturesSection.module.scss';

interface FeaturesSectionProps {}

const FeaturesSection: FC<FeaturesSectionProps> = () => (
  <div className={styles.FeaturesSection}>
    FeaturesSection Component
  </div>
);

export default FeaturesSection;
