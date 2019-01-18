import React from 'react'

export default function contactUs(props) {
    const { number } = props.match.params;
    console.log(props);
    return (
        <div className="container text-right" style={{ direction: 'rtl' }} >
            <h1>
                <span className="text-danger px-3">شماره تماس با ما:</span>
                <span style={{ display: 'inline-block' }}>{number}</span>
                <div className="mt-5" >از اینکه نظرات و پیشنهادات خود را برای ارسال میکنید سپاس گزاریم</div>
            </h1>
        </div>
    )
}
