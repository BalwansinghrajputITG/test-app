import React,{useState , useEffect} from 'react' 
function TimerFunc() {
  const [count, setCount] = useState("30:00");

  useEffect(() => {
    let [minutes, seconds] = count.split(":").map(Number);

    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          return;
        }
        minutes -= 1;
        seconds = 59;
      } else {
        seconds -= 1;
      }

      const m = minutes < 10 ? "0" + minutes : minutes;
      const s = seconds < 10 ? "0" + seconds : seconds;

      setCount(`${m}:${s}`);
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []); // run once on mount

  return (
    <div>
      <p className='text-2xl font-bold text-white text-center mb-5' > Time left :- {count}</p>
    </div>
  );
}
export default TimerFunc;