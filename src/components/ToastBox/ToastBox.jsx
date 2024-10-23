import PropTypes from 'prop-types';
import styles from './toastbox.module.css'
import React, { useEffect, useState } from 'react';
import info from '../../assets/info.png';
import success from '../../assets/success.png';
import warning from '../../assets/warning.png';
import error from '../../assets/error.png';
import close from '../../assets/close.png';
import grayInfo from '../../assets/grayInfo.png';
import graySuccess from '../../assets/graySuccess.png';
import grayWarning from '../../assets/grayWarning.png';
import grayError from '../../assets/grayError.png';
import { Toast } from '../../store';

export const ToastBox = ({ theme= 'default', tid='', message= 'no exsisting message', type= 'info', isClosable=true, duration=500, autoClose=false }) => {
  
  const [headIcon, setHeadIcon] = useState(info)
  const [themeClass, setThemeClass] = useState('')

  useEffect(()=>{
    if(theme !== 'default') {
    switch(type) {
      case 'info': setHeadIcon(info); break;
      case 'success': setHeadIcon(success); break;
      case 'warning': setHeadIcon(warning); break;
      case 'error': setHeadIcon(error); break;
    }}
  },[type,theme])

  useEffect(()=>{
    if(theme === 'default') {
      switch(type) {
        case 'info': setThemeClass(styles.info); setHeadIcon(grayInfo); break;
        case 'success': setThemeClass(styles.success); setHeadIcon(graySuccess); break;
        case 'warning': setThemeClass(styles.warning); setHeadIcon(grayWarning); break;
        case 'error': setThemeClass(styles.error); setHeadIcon(grayError); break;
      }
    }
  },[type, theme])

  useEffect(()=>{
    switch(theme) {
      case 'light': setThemeClass(styles.light); break;
      case 'dark':setThemeClass(styles.dark); break;
    }
  },[theme])

  useEffect(()=>{
    var timeOut;
    if(autoClose) {
      timeOut = setTimeout(()=>{
        Toast.delete(tid);
      },duration)
    }
    return ()=> timeOut && clearTimeout(timeOut)
  },[autoClose])


  return (
    <div className={`${themeClass} ${styles.border}`} >
      <div  className={styles.head_icon_container}>
        <img src={headIcon} alt={type}></img>
      </div>
      <div className={styles.message} >
        {message}
      </div>
      {isClosable && <div 
        onClick={()=>Toast.delete(tid)}
        className={styles.end_icon}>
         <img src={close} alt={type}></img>
      </div>}
    </div>
  ) 
}

ToastBox.propTypes = {
  tid: PropTypes.number,
  theme: PropTypes.oneOf(['default', 'light', 'dark']),
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  autoClose: PropTypes.bool,
  isClosable: PropTypes.bool,
  duration: PropTypes.number
}
