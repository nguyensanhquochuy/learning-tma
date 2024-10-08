import videoHomePage from "../../asset/videoHomePage.mp4"
const HomePage = (props) => {
    return (
        <div className="homepage-container flex gap-10">
            <video autoPlay muted loop className="w-1/2">
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content w-1/2 flex flex-col gap-10 py-48">
                <div className="text-[#191919] text-[80px] tracking-[-1.6px] leading-[80px] text-left w-3/4">Get to know your customers with forms worth filling out</div>
                <div className="text-[#191919] text-[20px] tracking-[-0.2px] leading-[24px] mt-8 text-left">
                    Collect all the data you need to understand customers with forms designed to be refreshingly different.
                </div>
                <div className="bg-[#191919] border-[#191919] border-solid border-[0.8px] rounded-[12px] text-white font-[500] flex justify-center leading-[24px] px-6 py-3 text-center w-1/3">
                    <button>Get started-it's free</button>
                </div>

            </div>
        </div>

    )
}

export default HomePage