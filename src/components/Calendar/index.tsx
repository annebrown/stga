// /src/components/Calendar/index.tsx
import SectionTitle from "../Common/SectionTitle";

const Calendar = () => {
    return (
        <>
              <div className=" bg-green-200 relative z-10 pt-14 pb-10 mt-0 mb-0
                rounded-lg">
                <div className="m-0 !mb-0 !pb-0">
                    <h2 className="mb-8 text-4xl text-black text-center font-bold">
                        Events Calendar
                    </h2>
                </div>
                <div className="relative w-full max-w-screen mx-auto mt-0 pt-0 self-center">        

                    <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=America%2FToronto&showPrint=0&mode=AGENDA&title=Save%20the%20Grove%20Again%20Calendar&src=MGE1NjU2YjkyZTAxZjVlMWRlYmE1YTNmNDEzMGYyNWEyNWQ0NzMyZTc3NTA4NjZiZWVhZmJmYmFmNmY5NGQ0MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2338AF34" width="800" height="300"
                    className="w-full m-0 mb-10 p-0 px-10 rounded-lg" ></iframe>
                </div>  
            </div>
        </>
    );
};

export default Calendar;
