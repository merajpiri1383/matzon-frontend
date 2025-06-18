import { FC } from "react";

interface Props {
    color?: string,
}

const LeftArrowCircleIcon: FC<Props> = ({ color = "#494949" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9997 13.3333L13.333 19.9999M13.333 19.9999L19.9997 26.6666M13.333 19.9999H26.6663M36.6663 19.9999C36.6663 29.2047 29.2044 36.6666 19.9997 36.6666C10.7949 36.6666 3.33301 29.2047 3.33301 19.9999C3.33301 10.7952 10.7949 3.33325 19.9997 3.33325C29.2044 3.33325 36.6663 10.7952 36.6663 19.9999Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};export default LeftArrowCircleIcon;