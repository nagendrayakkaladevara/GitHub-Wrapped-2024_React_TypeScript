import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 ">
                <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
                    <BoxReveal boxColor={"#133E87"} duration={0.5}>
                        <p className="text-[3.5rem] font-semibold">
                            Magic UI<span className="text-[#133E87]">.</span>
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#133E87"} duration={0.5}>
                        <h2 className="mt-[.5rem] text-[1rem]">
                            UI library for{" "}
                            <span className="text-[#133E87]">Design Engineers</span>
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#133E87"} duration={0.5}>
                        <div className="mt-6">
                            <p>
                                -&gt; 20+ free and open-source animated components built with
                                <span className="font-semibold text-[#133E87]"> React</span>,
                                <span className="font-semibold text-[#133E87]"> Typescript</span>,
                                <span className="font-semibold text-[#133E87]"> Tailwind CSS</span>,
                                and
                                <span className="font-semibold text-[#133E87]"> Framer Motion</span>
                                . <br />
                                -&gt; 100% open-source, and customizable. <br />
                            </p>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#133E87"} duration={0.5}>
                        <Link to='/form' >
                            <Button className="mt-[1.6rem] bg-[#133E87]" >Explore</Button>
                        </Link>

                    </BoxReveal>
                </div>
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
        </>
    )
}
export default LandingPage;