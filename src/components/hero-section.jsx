export default function HeroSection() {
    return (
        <div className="relative h-[750px]">
            <img src="../src/assets/hero-section.jpg" alt="Hero section background" className="z-10 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20 gap-12 mt-72">
                <p className="drop-shadow-lg font-extrabold text-7xl max-w-7xl">
                    Collaborate Smarter. Manage Faster.</p>
                <p className="drop-shadow-lg font-extralight text-2xl max-w-4xl leading-relaxed">
                    An all-in-one platform to chat, manage tasks, and move projects forward.
                </p>
                <a href="/contact" className="flex flex-row justify-center items-center gap-4 bg-pink-300 p-2 pl-3 pr-1 rounded-full text-black">Watch Demo
                    <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center" >
                        <img src="../src/assets/arrow-right.svg" alt="Connect with us link arrow" />
                    </div></a>
            </div>
        </div>
    );
}