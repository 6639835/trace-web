import React from 'react';
import styles from './iphone-mockup.module.css';

interface IPhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`${styles.deviceIphone14Pro} ${className}`}>
      <div className={styles.deviceFrame}>
        <div className={styles.deviceScreen}>
          {children}
        </div>
        <div className={styles.deviceStripe}></div>
        <div className={styles.deviceHeader}></div>
        <div className={styles.deviceSensors}></div>
        <div className={styles.deviceBtns}></div>
        <div className={styles.devicePower}></div>
        <div className={styles.deviceHome}></div>
      </div>
    </div>
  );
};

