import NavBar from "@/components/navbar";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                {/* <Slider className="w-1/2" />
                {
                    events[0].startTime > new Date() ?
                        <TimeTillFirstEvent first={events[0]} /> :
                        <h1>Events Started!</h1>
                }
                {/* <Timeline events={events} /> 
                <Timeline2 events={events} /> */}
                <Component />



            </div>
        </>
    );
}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YajEpayp98R
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <div className="p-4 bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="relative bg-white border-2 border-gray-300 p-4 rounded-b-lg shadow-md w-[300px]">
                <div className="absolute -top-9 right-0 translate-x-4 bg-white rounded-full w-20 h-20 flex items-center justify-center border-t-2 border-l-2 border-r-2 border-gray-300 z-0">
                    <PawPrintIcon className="w-8 h-8 text-gray-500" />
                </div>
                <div className="text-center space-y-2 z-10">
                    <h2 className="text-lg font-bold">Save the Date</h2>
                    <p className="text-sm">30th May 2026</p>
                    <div className="grid grid-cols-7 gap-1 text-xs">
                        <div>Su</div>
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div>19</div>
                        <div>20</div>
                        <div>21</div>
                        <div>22</div>
                        <div>23</div>
                        <div>24</div>
                        <div>25</div>
                        <div>26</div>
                        <div>27</div>
                        <div>28</div>
                        <div>29</div>
                        <div>30</div>
                        <div>31</div>
                    </div>
                    <p className="text-sm mt-2">Ronnie & Connor</p>
                </div>
            </div>
        </div>
    )
}

function PawPrintIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="4" r="2" />
            <circle cx="18" cy="8" r="2" />
            <circle cx="20" cy="16" r="2" />
            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
        </svg>
    )
}