import { useEffect } from "react"
import { Link } from "react-router-dom";

export function SaveTheDatePage() {

    useEffect(() => {
        const calScript = document.createElement("script");
        calScript.src = "https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js";
        calScript.async = true;
        calScript.defer = true;
        document.head.appendChild(calScript);
    }, []);

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#d2b48c] relative ">
                <div className="bg-[url('/wood-grain.jpg')] font-bold p-8 rounded-lg shadow-lg text-center text-[#5a3e36] border-4 border-[#462f29] mb-8">
                    <h1 className="text-3xl font-bold mb-2">Save the Date</h1>
                    <p className="text-xl mb-4">30th May 2026</p>
                    <div className="grid grid-cols-7 gap-2 text-sm mb-4">
                        <span className="font-bold">Su</span>
                        <span className="font-bold">Mo</span>
                        <span className="font-bold">Tu</span>
                        <span className="font-bold">We</span>
                        <span className="font-bold">Th</span>
                        <span className="font-bold">Fr</span>
                        <span className="font-bold">Sa</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                        <span>14</span>
                        <span>15</span>
                        <span>16</span>
                        <span>17</span>
                        <span>18</span>
                        <span>19</span>
                        <span>20</span>
                        <span>21</span>
                        <span>22</span>
                        <span>23</span>
                        <span>24</span>
                        <span>25</span>
                        <span>26</span>
                        <span>27</span>
                        <span>28</span>
                        <span>29</span>
                        <span className="bg-[#5a3e36] text-[#deb887] rounded-full w-8 h-8 flex items-center justify-center">30</span>
                        <span>31</span>
                    </div>
                    <p className="text-2xl font-semibold font-lobster">Ronnie & Connor</p>
                </div>
                <div title="Add to Calendar" className="addeventatc mb-8">
                    Add to Calendar
                    <span className="start">05/30/2024 07:00 AM</span>
                    <span className="end">05/30/2024 7:00 PM</span>
                    <span className="timezone">Europe/London
                    </span>
                    <span className="title">Connie Wedding</span>
                    <span className="description">The Wedding of Connor and Ronnie</span>
                    <span className="location">Water's Edge at Ewen, GL76BY</span>
                </div>
                <Link to={"/"} className="text-m font-semibold hover:underline hover:underline-offset-4 hover:text-blue-700">
                    Back Home
                </Link>

                <div className="invisible md:visible lg:visible xl:visible absolute top-10 right-14 w-64 h-64 rotate-45 bg-[url('/paw-print.svg')] bg-no-repeat bg-contain" />
                <div className="invisible md:visible lg:visible xl:visible absolute bottom-10 left-14 w-64 h-64 rotate-45 bg-[url('/paw-print.svg')] bg-no-repeat bg-contain" />

                <div className="invisible md:visible lg:visible xl:visible absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rotate-45 bg-[url('/paw-print.svg')] bg-no-repeat bg-contain" />

                <div className="invisible md:visible lg:visible xl:visible absolute top-10 right-14 w-64 h-64 rotate-45 bg-[url('/paw-print.svg')] bg-no-repeat bg-contain" />
                <div className="absolute top-1 -translate-x-1/2  w-64 h-64 rotate-45 bg-[url('/paw-print.svg')] bg-no-repeat bg-contain" />


            </div>
        </div>
    )
}
