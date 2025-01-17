import CoolDivider from "@/components/about/CoolDivider";
import RedBox from "@/components/about/RedBox";
import Superheroes from '@/components/about/SuperHeroes/Superheroes';
import OurWorkSection from '@/components/about/OurWork/OurWorkSection';
import CoreValuesGrid from "@/components/about/CoreValuesGrid";
import CoreValuesSlider from "@/components/about/CoreValuesSlider";

export default function About() {
    return (
        <div className="overflow-hidden">
            <section className="bg-primaryBg text-white pt-12 lg:pt-28 px-3 lg:px-32 font-grotley grid grid-cols-2 lg:grid-cols-3 md:pb-20">
                <div className="lg:col-span-2">
                    <div className="relative pt-2 px-2 md:pt-5 md:px-5">
                        <img
                            className="absolute top-0 left-0 w-4 h-4 md:w-12 md:h-12"
                            src="/spark.svg"
                        />
                        <h1 className="text-4xl lg:text-5xl">About Us</h1>
                    </div>

                    <div className="mt-6 relative pt-5 lg:w-[645px]">
                        <p className="hidden lg:block ml-5">
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                        </p>

                        <p className="lg:hidden ml-2">
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <img
                        className="w-5 h-6 md:w-10 md:h-12 absolute top-[60%]"
                        src="/spiral.svg"
                    />
                    <img
                        className="w-16 h-16 md:w-40 md:h-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src="/wheel.svg"
                    />
                    <img
                        className="w-12 h-16 md:h-40 md:w-32 absolute top-1/2 left-[60%]"
                        src="/question.svg"
                    />
                </div>
            </section>

            <div className="bg-primaryBg pt-12 relative">
                <div className="flex justify-between w-3/5 md:w-1/2">
                    <img src="/st_patricks_logo.svg" className="w-20 h-20 md:w-48 md:h-52" />

                    <div className="self-center z-50">
                        <img src="/yellow_logo.svg" className="w-20 h-20 md:w-44 md:h-52" />
                    </div>

                </div>
                <CoolDivider />
            </div>

            <div className="z-50 bg-white relative h-40 md:h-[338px] pt-4 flex justify-end px-10 lg:px-80">
                <img className="w-11 h-6 md:w-20 md:h-12" src="/cloud.svg" />
            </div>

            <section className="relative z-50 px-5 grid grid-cols-1 lg:grid-cols-2">
                <div className="absolute hidden lg:block -top-10 left-1/2 w-32 h-40">
                    <svg width="208" height="142" viewBox="0 0 208 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M192.885 140.242C204.216 75.9809 161.088 14.6626 96.5554 3.28385C61.545 -2.88943 27.4273 6.90447 1.72907 27.4188M192.885 140.242C197.047 127.158 200.859 121.784 206.446 119.521M192.885 140.242C191.79 126.553 189.292 120.453 184.363 116.979" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="absolute hidden lg:block top-1/3 left-[47%]">
                    <img src="/illustration.svg" width={120} height={120} />
                </div>
                <RedBox pillText={'what we do'}>
                    <p className="w-[367px] h-[144px] mt-10">
                        Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                    </p>
                </RedBox>

                <div className="mt-4 flex justify-between w-3/5">
                    <svg className="md:hidden" width="64" height="121" viewBox="0 0 64 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.1183 114.546C27.7844 113.61 -0.097327 84.0866 0.842619 48.6037C1.35256 29.3533 10.241 12.3037 23.9089 0.882365M63.1183 114.546C55.7233 115.34 52.4587 116.782 50.6531 119.503M63.1183 114.546C55.9708 112.484 53.0033 110.499 51.6927 107.507" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className="md:hidden" src="/illustration.svg" width={120} height={120} />
                </div>
                <div></div>

                <div className="mt-24 md:-mt-20">
                    <RedBox pillText={'who we are'}>
                        <p className="w-[367px] h-[144px] mt-10">
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                        </p>
                    </RedBox>
                </div>
            </section>

            <div className="mt-8 ml-20 lg:ml-[407px]">
                <img className="w-14 h-14 md:w-24 md:h-24" src="/four_leaf_clover.svg" />
            </div>

            <section className="mt-8 px-7">
                <div className="flex justify-end">
                    <img className="w-6 h-6" src="/black-star.svg" />
                </div>
                <h1 className="text-center text-4xl font-bold font-satoshi mb-12">Our Core Values</h1>

               <CoreValuesGrid />
               <CoreValuesSlider />
            </section>

            <Superheroes />
            <OurWorkSection />
        </div>
    )
}

