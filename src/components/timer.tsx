import { useEffect, useState } from 'react';

type TimeLeftStruct = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeftStruct | Record<string, never> = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div className="flex flex-col items-center mx-2" key={interval}>
                <div className="relative">
                    <div className="w-16 h-24 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                            {/* @ts-expect-error key must exist on object for this to be called*/}
                            {timeLeft[interval]}
                        </div>
                    </div>
                </div>
                <div className="uppercase text-xs mt-2">{interval}</div>
            </div>
        );
    });

    return (
        <div className="flex justify-center">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default CountdownTimer;