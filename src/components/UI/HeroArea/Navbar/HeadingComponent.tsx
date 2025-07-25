import MagneticButton from '../../MagneticButton/MagneticButton';

function HeadingComponent() {
    return (
        <nav className="z-20 w-full p-4 mt-2 h-fit">
            <div className="absolute flex flex-col md:flex-row justify-between items-center w-full">

                {/* Left Button - Always visible but properly spaced */}
                <div className="hidden md:block w-auto md:pl-[3.5rem]">
                    <MagneticButton
                        ariaLabel="View My Career Story"
                        content="My Career Story"
                        link="https://drive.google.com/file/d/1uo2RIfQRnbLmIvRDbnjVmLwtijK4yPNE/view?usp=sharing"
                        styles="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
                    />
                </div>

                {/* Right Buttons - Centered on smaller screens, aligned right on larger screens */}
                <div className="flex justify-center md:justify-end space-x-4 gap-x-4 md:pr-24">
                    <MagneticButton
                        ariaLabel="Visit GitHub Profile"
                        content="GH"
                        link="https://github.com/Aastha-9"
                        styles="p-3 rounded-lg font-Asgard cursor-none text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                    />
                    <MagneticButton
                        ariaLabel="Visit LinkedIn Profile"
                        content="LN"
                        link="https://www.linkedin.com/in/aasthabisen09"
                        styles="p-3 rounded-lg font-Asgard cursor-none text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                    />
                    {/* <MagneticButton
                        ariaLabel="Read My Blog"
                        content="LT"
                        link="https://linktr.ee/+"
                        styles="p-3 rounded-lg font-Asgard cursor-none text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                    /> */}
                </div>
            </div>
        </nav>
    );
}

export default HeadingComponent;
