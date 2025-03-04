// /src/components/Events/index.tsx

const Events = () => {
  return (
    <>
        <section className="z-10 w-full p-0 m-0 mx-auto">
            <div className="w-full flex flex-row gap-4 m-0 p-0 object-center  mx-auto rounded-md">
                <h2 className="text-4xl p-5 py-10 text-center text-black font-bold">
                    Events
                </h2>

                <div className="rounded-md w-full">        
                    <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=America%2FToronto&title=EVENTS&showCalendars=0&showTz=0&mode=AGENDA&showTitle=0&src=MGE1NjU2YjkyZTAxZjVlMWRlYmE1YTNmNDEzMGYyNWEyNWQ0NzMyZTc3NTA4NjZiZWVhZmJmYmFmNmY5NGQ0MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457" width="400" height="200"></iframe>
                </div>  
            </div>

        </section>
    </>
  );
};

export default Events;
