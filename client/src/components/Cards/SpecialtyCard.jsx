import * as React from 'react';
import './Card.css'
import { FaBaby } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import { GiSkeletonInside } from "react-icons/gi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { IoEyeSharp } from "react-icons/io5";

export default function SpecialtyCard({ icon, color, backgroundColor, specialtyName }) {
  const renderIcon = () => {
    switch (icon) {
      case 'baby':
        return <FaBaby />;
      case 'mentalHealth':
        return <RiMentalHealthFill />;
      case 'heartRateMonitor':
        return <TbHeartRateMonitor />;
      case 'skeleton':
        return <GiSkeletonInside />;
      case 'smileFace':
        return <HiOutlineFaceSmile />;
      case 'eye':
        return <IoEyeSharp />;
      default:
        return null;
    }
  };

  return (
    <div className='SpecialtyCard'>
      <div style={{ backgroundColor: backgroundColor, marginTop: '20px', width: '20px', height:'20px'}}>
        {renderIcon()}
      </div>

      <div>
        <h4 className='SpecialtyName'>
          {specialtyName}
        </h4>
      </div>
    </div>
  );
}
