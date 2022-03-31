import React, { useEffect, useRef, useState } from 'react'
import '../styles/Count.css'

const Count = () => {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')


    let interval = useRef();

    const startTimer = () =>{
        const countdowdate = new Date('april 30, 2022 00:00:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdowdate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            if(distance < 0) {
                //stop our timer
                clearInterval(interval.current)
            }else{
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        
        },1000)


    }


    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(interval.current);
      };
    });
    

  return (
    <div className='count-container'>
        <div className='count-days counter'>
            <span className='days spaner'>{timerDays}</span>
            <p>DAYS</p>
        </div>
        <div className='count-hours counter'>
            <span className='hours spaner'>{timerHours}</span>
            <p>HOURS</p>
        </div>
        <div className='count-minutes counter'>
            <span className='minutes spaner'>{timerMinutes}</span>
            <p>MINUTES</p>
        </div>
        <div className='count-seconds counter'>
            <span className='seconds spaner'>{timerSeconds}</span>
            <p>SECONDS</p>
        </div>
    </div>
  )
}

export default Count