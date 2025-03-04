// /src/components/Calendar/index.tsx
const Calendar = () => {
    return (
        <>
              <div className=" bg-green-200 relative z-10 pt-10 pb-2 rounded-lg mt-10 mr-2 mb-5">
                <h1 className="text-3xl font-bold text-center pb-5 text-black">
                    Events
                </h1>     

                <div className="relative w-full max-w-screen mx-auto self-center rounded-lg ">        
                    <iframe 
                        src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=America%2FToronto&title=EVENTS&showCalendars=0&showTz=0&mode=AGENDA&showTitle=0&src=MGE1NjU2YjkyZTAxZjVlMWRlYmE1YTNmNDEzMGYyNWEyNWQ0NzMyZTc3NTA4NjZiZWVhZmJmYmFmNmY5NGQ0MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457" 
                        width="800" height="400"
                        className="w-full h-auto p-8"    
                    ></iframe>
                </div>  
            </div>
        </>
    );
};

export default Calendar;
