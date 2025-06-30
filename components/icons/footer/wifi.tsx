import { FC } from "react"


interface Props {
    color?: string
}

const WifiIcon: FC<Props> = ({ color = "#7A7A7A" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33301 9.16683C5.32213 9.16683 7.22979 9.95701 8.63631 11.3635C10.0428 12.7701 10.833 14.6777 10.833 16.6668M3.33301 3.3335C6.86923 3.3335 10.2606 4.73825 12.7611 7.23874C15.2616 9.73922 16.6663 13.1306 16.6663 16.6668M4.99967 15.8335C4.99967 16.2937 4.62658 16.6668 4.16634 16.6668C3.7061 16.6668 3.33301 16.2937 3.33301 15.8335C3.33301 15.3733 3.7061 15.0002 4.16634 15.0002C4.62658 15.0002 4.99967 15.3733 4.99967 15.8335Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};export default WifiIcon;