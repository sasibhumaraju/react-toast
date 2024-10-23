import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from './animate.module.css';
import { Toast } from '../../store';

const getAnimationTypeClass = (direction) => {
    switch(direction) {
        case 'rightIn': return styles.right_in;
        case 'rightOut': return styles.right_out;
        case 'leftIn': return styles.left_in;
        case 'leftOut': return styles.left_out;
    }
}

export const Animate = ({inAnimationDirection = 'rightIn', outAnimationDirection = 'rightOut', children, tid='', isAlive=true}) => {
    useEffect(()=>{
        var timeOut;
        if(!isAlive) {
            timeOut = setTimeout(()=>{
                Toast.deletePermanently(tid)
            },130)
        }
        return ()=> timeOut && clearTimeout(timeOut)
    },[isAlive])
    return(
        <div className= { isAlive? `${getAnimationTypeClass(inAnimationDirection)} ${styles.default}` : `${getAnimationTypeClass(outAnimationDirection)} ${styles.default }`}>
            {children}
        </div>
    )
}

Animate.propTypes = {
    inAnimationDirection: PropTypes.oneOf(['leftIn', 'rightIn']),
    outAnimationDirection: PropTypes.oneOf(['leftOut', 'rightOut']),
    tid: PropTypes.number,
    isAlive: PropTypes.bool,
    children: PropTypes.node
}