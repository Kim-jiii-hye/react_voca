import Word from '../components/Word';
// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Day() {

const day = useParams().day;

// const wordList = dummy.words.filter(word => word.day === Number(day));
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    }, [day]);
//day와 같은 특정 값을 사용할 때는 2번째 파라미터 배열에 입력이 필요함.
    return (
        <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                    <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}