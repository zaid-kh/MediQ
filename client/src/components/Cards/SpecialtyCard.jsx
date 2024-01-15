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
        return <FaBaby fontSize="24px" color={backgroundColor}/>;
      case 'mentalHealth':
        return <RiMentalHealthFill fontSize={"24px"} color={backgroundColor} />;
      case 'heartRateMonitor':
        return <TbHeartRateMonitor fontSize={"24px"} color={backgroundColor} />;
      case 'skeleton':
        return <GiSkeletonInside fontSize="24px" color={backgroundColor}/>;
      case 'smileFace':
        return <HiOutlineFaceSmile fontSize="24px" color={backgroundColor}/>;
      case 'eye':
        return <IoEyeSharp fontSize={"24px"} color={backgroundColor}/>;
      default:
        return null;
    }
  };

  return (
    <div className='SpecialtyCard'>
        {renderIcon()}

      <div>
        <span className='SpecialtyName'>
          {specialtyName}
        </span>
      </div>
    </div>
  );
}
