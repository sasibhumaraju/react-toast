import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Animate } from '../animate';
import styles from './toastscontainer.module.css'
import { ToastBox } from '../ToastBox'
import {Toast} from '../../store'
import { useZindex } from '../../hooks/useZindex';

const TOPRIGHT = 'topRight';
const TOPLEFT = 'topLeft';
const BOTTOMRIGHT = 'bottomRight';
const BOTTOMLEFT = 'bottomLeft';

const getBoundaries = (postion) => {
  switch(postion) {
    case TOPRIGHT: return {top: '0px', right: '0px'};
    case TOPLEFT: return {top: '0px', left: '0px'};
    case BOTTOMRIGHT: return {right: '0px', bottom: '0px'};
    case BOTTOMLEFT: return {left: '0px', bottom: '0px'};
  }
}

const getAnimationTypes = (position) => {
  switch(position) {
    case TOPRIGHT: return {in: 'rightIn', out: 'rightOut'}; 
    case TOPLEFT: return {in: 'leftIn', out: 'leftOut'};
    case BOTTOMRIGHT: return {in: 'rightIn', out: 'rightOut'};
    case BOTTOMLEFT: return {in: 'leftIn', out: 'leftOut'};
  }
}

const getColumnType = (position) => {
  if(position.includes('top')) return 'column-reverse';
  else return 'column';
}

export const ToastsContainer = ({placement = 'topRight', theme = 'default', autoClose=false, isClosable=true, duration=500}) => {

  const [toasts, setToasts] = useState([]);
  const zIndex = useZindex();
  
  useEffect(()=>{
    Toast.subscribe((toasts)=>{
        setToasts(toasts)
    })
  },[])
    
  // ********************** testing purpose *************************
  // const addElemnet = () => {
  //   const tid = Toast.error('tired!! yet I build this today')
  //   Toast.update({tid:tid,type:"info",message:"update successful"});
  // }

  // const removeElemnet = () => {
  //   Toast.delete(count);
  //   setCount(count-1);
  // }
  // *****************************************************************

  return (
    <div>
        <div
          className={styles.toast_container}
          style={{  
            position: 'fixed',
            height: `${toasts.length*63}px`,
            zIndex: zIndex,
            display: 'flex',
            // backgroundColor:'teal',
            flexDirection: getColumnType(placement),
            ...getBoundaries(placement),
          }}
        >
          {toasts.map((t)=>{
              return <Animate key={t.tid} inAnimationDirection={getAnimationTypes(placement).in} outAnimationDirection={getAnimationTypes(placement).out} tid={t.tid} isAlive={t.isAlive} >
                <ToastBox tid={t.tid} type={t.type} message={t.message} theme={theme} isClosable={isClosable} duration={duration} autoClose={autoClose} />
              </Animate>
          })}


        </div>
        
      {/* ************* testing purpose *********************** */}
      {/* <button onClick={addElemnet}>add element</button>
      <button onClick={removeElemnet}>remove element</button>
      {JSON.stringify(toasts)} */}
      {/* ***************************************************** */}

    </div>

  )
}

ToastsContainer.propTypes = {
  placement: PropTypes.oneOf(['topRight', 'topLeft',  'bottomLeft', 'bottomRight']),
  theme: PropTypes.oneOf(['dark', 'bright', 'default']),
  autoClose: PropTypes.bool,
  isClosable: PropTypes.bool,
  duration: PropTypes.number
}


