// https://marian-caikovski.medium.com/drawing-sectors-and-pie-charts-with-svg-paths-b99b5b6bf7bd
import React from 'react';


const PieChart = (props: { colors: string[], radius: number }) => {
    const pieItemAngle = 360 / props.colors.length;
    const correctedRadius = props.radius;
    if (props.colors.length === 1) {
        return (
            <svg >
                <circle cx={correctedRadius} cy={correctedRadius} r={correctedRadius} fill={props.colors[0]} stroke="white" strokeWidth="2px"/>
            </svg>
        )
    }

    const paths = props.colors.map((color, index) => {
        const startAngle = index * pieItemAngle;
        const endAngle = (index + 1) * pieItemAngle;

        return <path key={index} d={getD(correctedRadius, startAngle, endAngle)} fill={color} stroke="white" strokeWidth="2px"/>
    })

    const lines = props.colors.map((color, index) => {
        const startAngle = index * pieItemAngle;
        const start = polarToCartesian(correctedRadius, startAngle);

        return <line key={index} x1={start.x} y1={start.y} x2={correctedRadius} y2={correctedRadius} stroke="white" strokeWidth="2px"/>
    })

    return (
        <svg >
            {paths}
            {lines}
        </svg>
    );
};

function getD(radius: number, startAngle: number, endAngle: number) {

    const start = polarToCartesian(radius, startAngle);
    const end = polarToCartesian(radius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y,
        "L", radius, radius,
        "L", start.x, start.y,
        "Z"
    ];

    return d.join(" ");
}

function polarToCartesian(radius: number, angleInDegrees: number) {
    const radians = (angleInDegrees - 90) * Math.PI / 180;
    return {
        x: Math.round(radius + (radius * Math.cos(radians))),
        y: Math.round(radius + (radius * Math.sin(radians)))
    };
}

export default PieChart;