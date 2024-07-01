import NavBar from "@/components/navbar";
import Timeline, { TimeTillFirstEvent, Timeline2 } from "@/components/timelline";
import { Slider } from "@/components/ui/slider";

export type Event = {
    startTime: Date;
    title: string;
    description?: string;
    URL?: string;
}

export function TestPage() {
    let events: Event[] = [
        {
            startTime: new Date('2024-07-01T08:00:00'),
            title: "First Event",
            description: "description",
            URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            startTime: new Date('2024-07-01T21:00:00'),
            title: "Pre-Party",
        },
        {
            startTime: new Date('2024-12-31T10:00:00'),
            title: "Doors open",
        }, {
            startTime: new Date('2024-12-31T12:00:00'),
            title: "Lunch",
        },
        {
            startTime: new Date('2024-12-31T15:00:00'),
            title: "After Party",
        }
    ];
    events = events.sort(function (a, b) {
        const keyA = a.startTime;
        const keyB = b.startTime;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center self-center justify-center min-h-screen bg-slate-700">
                <Slider className="w-1/2" />
                {
                    events[0].startTime > new Date() &&
                    <TimeTillFirstEvent first={events[0]} />
                }
                <Timeline events={events} />
                <Timeline2 events={events} />




            </div>
        </>
    );
}