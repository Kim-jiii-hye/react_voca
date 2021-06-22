import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json";


export default function DayList() {
    // const [days, setDays] = useState([]);

    const days = useFetch('http://localhost:3001/days');

    if(days.length === 0){
        return <span>Loadding....</span>
    }
    //api 요청
    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []);



    // const [count, setCount] = useState(0);

    // function onClick() {
    //     setCount(count + 1);
    // }

    // function onClick2() {
    //     setDays([
    //         ...days,
    //         {
    //             id: Math.random(),
    //             day: 1,
    //         }
    //     ])
    // }

    // count가 변경됐을 때만 함수가 실행될 수 있도록 두번째 매개변수에 count
    // useEffect(() => {
    //     console.log("change");
    // }, [count]);

    return (
        <>
            <ul className="list_day">
                {/* {dummy.days.map(day =>( */}
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            {/* <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>Day change</button> */}
        </>
    );
}