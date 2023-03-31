import React from "react";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";

const Highlight = ({ className = "" }) => {
  return (
    <div className="absolute w-full">
      <div className="container mx-auto flex flex-col justify-between py-4 md:flex-row space-x-0 md:space-x-6">
        {/* Column 1 */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0 gap-4">
          <HiOutlineUser className="text-2xl" />
          <div>
            <p className="mb-0">Where we are</p>
            <h5>Street Lorem Ipsum 12</h5>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0 gap-4">
          <HiOutlineEnvelope className="text-2xl" />
          <div>
            <p className="mb-0">Send us an email</p>
            <h5>john.doe@example.com</h5>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0 gap-4">
          <HiOutlinePhone className="text-2xl" />
          <div>
            <p className="mb-0">Give us a call</p>
            <h5>123-456-7890</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
