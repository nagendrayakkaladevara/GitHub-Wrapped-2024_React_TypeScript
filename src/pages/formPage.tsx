import { useState } from "react";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TooltipWithTrigger from "@/components/customComponents/tooltip";
import { useToast } from "@/hooks/use-toast";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Code, GitCommitHorizontal, Share2Icon, Flame, Star, ChevronRight } from "lucide-react";
import NumberTicker from "@/components/ui/number-ticker";
import { AnimatedList } from "@/components/ui/animated-list";
import SparklesText from "@/components/ui/sparkles-text";
import TypingAnimation from "@/components/ui/typing-animation";
import BlurIn from "@/components/ui/blur-in";
import FlipText from "@/components/ui/flip-text";
import HyperText from "@/components/ui/hyper-text";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

// const API_URL = "http://localhost:5000/githubUser/getDetails/";

const API_URL = 'git-hub-wrapped-2024-express-type-script-backend.vercel.app';

const FormPage = () => {
    const { toast } = useToast()

    const [username, setUsername] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [date, setData] = useState<any>({});

    const validateUsername = (input: string) => {
        // GitHub username validation regex
        const regex = /^[a-zA-Z0-9-]+$/;
        return regex.test(input);
    };

    const handleSubmit = async () => {
        if (!validateUsername(username)) {
            setError("Please enter a valid GitHub username.");
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Please enter a valid GitHub username.",
            })
            return;
        }

        setLoading(true);
        setError(""); // Clear any previous error

        try {
            const response = await fetch(`${API_URL}/githubUser/getDetails/${username}`);
            if (!response.ok) {
                setError("GitHub user not found.");
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "GitHub user not found.",

                })
                setIsValid(false);
            } else {
                const data = await response.json();
                setIsValid(true);
                setData(data);
                // console.log("GitHub user data:", data); // Handle the data as needed
            }
        } catch (error) {
            setError("Failed to fetch data from GitHub.");
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Failed to fetch data from GitHub.",
            })
            setIsValid(false);
        } finally {
            setLoading(false);
        }
    };

    let notifications = [
        {
            name: `${date?.topLanguages?.[2]}`,
            description: "Magic UI",
            time: "",
            icon: "🚀",
            color: "#FFB800",
        },
        {
            name: `${date?.topLanguages?.[1]}`,
            description: "Magic UI",
            time: "",
            icon: "🚀",
            color: "#FF3D71",
        },
        {
            name: `${date?.topLanguages?.[0]}`,
            description: "Magic UI",
            time: "",
            icon: "🚀",
            color: "#1E86FF",
        },
    ];


    const Notification = ({ name, icon, color }: Item) => {
        return (
            <figure
                className={cn(
                    "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl py-1 px-3",
                    // animation styles
                    "transition-all duration-200 ease-in-out hover:scale-[103%]",
                    // light styles
                    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                )}
            >
                <div className="flex flex-row items-center gap-3">
                    <div
                        className="flex size-10 items-center justify-center rounded-xl"
                        style={{
                            backgroundColor: color,
                        }}
                    >
                        <span className="text-lg">{icon}</span>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                            <span className="text-sm">{name}</span>
                        </figcaption>
                    </div>
                </div>
            </figure>
        );
    };


    const features = [
        {
            Icon: GitCommitHorizontal,
            name: "Total Commits made in 2024",
            description: "",
            href: "#",
            cta: "",
            className: "col-span-3 lg:col-span-1",
            background: (
                <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker value={date?.totalCommits} />
                </p>
            ),
        },
        {
            Icon: Code,
            name: "Top Languages",
            description: "",
            href: "#",
            cta: "",
            className: "col-span-3 lg:col-span-2",
            background: (
                <AnimatedList>
                    {notifications.map((item, idx) => (
                        <Notification {...item} key={idx} />
                    ))}
                </AnimatedList>
            ),
        },
        {
            Icon: Share2Icon,
            name: "Repositories created in 2024",
            description: "",
            href: "#",
            cta: "",
            className: "col-span-3 lg:col-span-2",
            background: (
                <div className="flex justify-center items-center h-[100%]">
                    <SparklesText text={date?.reposCreatedIn2024Count} />
                </div>
            ),
        },
        {
            Icon: CalendarIcon,
            name: "Most Active Month",
            description: "",
            className: "col-span-3 lg:col-span-1",
            href: "#",
            cta: "",
            background: (
                <TypingAnimation>{`${date?.mostActiveMonth?.name} -  ${date?.mostActiveMonth?.commits}`}</TypingAnimation>
            ),
        },
        {
            Icon: Flame,
            name: "Longest Streak",
            description: "",
            className: "col-span-3 lg:col-span-1",
            href: "#",
            cta: "",
            background: (
                <BlurIn
                    word={`${date?.longestStreak}`}
                    className="text-4xl font-bold text-black dark:text-white"
                />
            ),
        },
        {
            Icon: Star,
            name: "Stars Earned",
            description: "",
            className: "col-span-3 lg:col-span-1",
            href: "#",
            cta: "",
            background: (
                <FlipText
                    className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
                    word={`${date?.starsEarned}`}
                />
            ),
        },
        {
            Icon: CalendarIcon,
            name: "Most Active Day",
            description: "",
            className: "col-span-3 lg:col-span-1",
            href: "#",
            cta: "",
            background: (
                <HyperText>{`${date?.mostActiveDay?.name} - ${date?.mostActiveDay?.commits}`}</HyperText>
            ),
        },
    ];

    return (
        <>
            <div className="relative min:h-screen  w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 pt-10">
                {isValid ? (<>
                        <Card className="p-5">
                            <AnimatedGradientText className="mb-10">
                                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                                <span
                                    className={cn(
                                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                    )}
                                >
                                    {date?.username}
                                </span>
                                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedGradientText>
                            <BentoGrid>
                                {features.map((feature, idx) => (
                                    <BentoCard key={idx} {...feature} />
                                ))}
                            </BentoGrid>
                        </Card>
                </>) : (<>
                    <div className="h-[500px] flex justify-center items-center">
                        <Card className="w-[350px] relative">
                            <CardHeader>
                                <CardTitle>Username</CardTitle>
                                <CardDescription>Enter your Github username.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Type here.."
                                />
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <TooltipWithTrigger
                                    trigger={
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={loading}
                                        >
                                            {loading ? "Loading..." : "Submit"}
                                        </Button>
                                    }
                                    content={`Click to submit`}
                                />
                            </CardFooter>
                            <BorderBeam size={250} duration={5} delay={9} />
                        </Card>
                        <AnimatedGridPattern
                            numSquares={30}
                            maxOpacity={0.1}
                            duration={3}
                            repeatDelay={1}
                            className={cn(
                                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                            )}
                        />
                    </div>
                </>)}
            </div>
        </>
    );
};

export default FormPage;