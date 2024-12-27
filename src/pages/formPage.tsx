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
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TooltipWithTrigger from "@/components/customComponents/tooltip";



const FormPage = () => {
    return (
        <>
            <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 ">
                <Card className="w-[350px] relative">
                    <CardHeader>
                        <CardTitle>Username</CardTitle>
                        <CardDescription>Enter your Github username.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input placeholder="Type here.." />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <TooltipWithTrigger
                            trigger={
                                <Button>Submit</Button>
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
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
        </>
    )
}
export default FormPage;