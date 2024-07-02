import { Event } from "@/routes/testPage";
import { format } from "date-fns";
import CountdownTimer from "./timer";

export default function Timeline({ events }: { events: Event[] }) {
    return (
        <div className="flex-row">
            <div className="flex flex-col">
                {events.map((event, index) => (
                    <div key={index} className="flex items-center w-full mb-2">
                        <div className="text-right pr-4">
                            <p className="text-gray-500 whitespace-nowrap">{format(event.startTime, "do 'of' MMMM yyyy 'at' HH:mm")}</p>
                        </div>
                        <div className="relative w-1/12 flex justify-center">
                            <div className="bg-gray-400 w-2 h-2 rounded-full"></div>
                            {index !== events.length - 1 && (
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-400"></div>
                            )}
                        </div>
                        <div className="w-5/6 pl-4 text-nowrap">
                            <p>{event.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Timeline2({ events }: { events: Event[] }) {
    const now = new Date();
    return (
        <div className="flex-row">
            <ol className="relative border-s border-gray-200 dark:border-black">
                {events.map((event, index) => (
                    <li key={index} className="mb-10 ms-4">
                        {event.startTime > now ?
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> :
                            <div className="absolute w-3 h-3 bg-green-400-200 rounded-full mt-1.5 -start-1.5 border bg-green-400 dark:border-gray-900 dark:bg-gray-700"></div>
                        }
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{format(event.startTime, "do 'of' MMMM yyyy 'at' HH:mm")}</time>
                        <a href={event.URL}><h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3></a>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>

                    </li>
                ))}
            </ol>
        </div>
    );
}

// Timer till the first event in the timeline
export function TimeTillFirstEvent({ first }: { first: Event }) {
    return (
        <>
            <h1 className="dark:text-white text-gray-300 font-semibold text-lg">Time until first event:</h1>
            <CountdownTimer targetDate={first.startTime} />
        </>
    )
}

// A card for the current event and its details
export function CurrentEvent() {

}

// A card for the current event, how long until it starts and when it ends/length
export function NextEvent() {

}