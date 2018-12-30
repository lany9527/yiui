import React from 'react';
import styles from './Button.less'

const Button = ({children}) => (
  <div style={styles.btnWrap}>
    {children}
  </div>
);

export default Button;
