//import Link from 'next/link';
import MotionTextWrapper from '../../withAnimation/withAnimation';


function Brief() {
    return (
        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-baseline px-4 md:px-12 py-10 mb-4 z-10">
            {/* Left Section - Always visible */}
            <div className="w-full lg:w-1/3 -mb-24 mt-4 md:mb-0">
                <MotionTextWrapper delay={1}>
                    <span className="text-AAprimary font-Text2 text-xl lg:text-[1.25rem] rounded-md md:pl-12 lg:pl-0 ">
                        Living the dev life at Sinhgad Academy Of Engineering — fueled by ideas, not just syntax.
                    </span>
                </MotionTextWrapper>
            </div>

            {/* Right Section - Hidden on mobile, visible on desktop */}
            {/* <div className="hidden lg:block md:w-1/2 lg:w-1/3">

                <MotionTextWrapper delay={1}>
                    <span className="text-AAprimary font-Text2 text-sm sm:text-base md:text-md lg:text-[1.25rem]">
                        Living the dev life at Sinhgad Academy Of Engineering — fueled by ideas, not just syntax.
                    </span>
                </MotionTextWrapper>
            </div> */}
        </div>
    );
}

export default Brief;
