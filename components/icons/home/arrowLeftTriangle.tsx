import { FC } from "react";


interface Props {
    color?: string,
}

const ArrowLeftTriangle: FC<Props> = ({ color ="#4F4F4F" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.90039 6.82666C3.76122 6.68749 3.85978 6.45396 4.05273 6.45361L11.9463 6.45361C12.1378 6.45361 12.2354 6.69089 12.0996 6.82666L8.64648 10.2798C8.28873 10.6375 7.70581 10.6379 7.34766 10.2808L6.04102 8.96729L3.90039 6.82666Z" fill={color} stroke={color} />
        </svg>
    )
};export default ArrowLeftTriangle;