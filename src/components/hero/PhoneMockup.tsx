export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[340px] sm:w-[380px]">
      <div className="relative rounded-[3rem] border-[7px] border-aster-black bg-aster-black shadow-pop overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-7 bg-aster-black z-20 flex items-center justify-center">
          <div className="h-1.5 w-24 rounded-full bg-gray-700" />
        </div>
        {/* Screen */}
        <div className="relative aspect-[9/19] bg-aster-black overflow-hidden">
          <img
            src="/assets/images/dashboard.jpeg"
            alt="ASTER App — Dashboard real"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
