import { FC } from "react";


interface Props {
    color?: string,
}


const Star2Icon: FC<Props> = ({ color = "#FFE031" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1627_13607)">
                <path d="M8.02458 2.31824C8.25939 1.27869 9.74061 1.27869 9.97542 2.31824L10.1497 3.08981C10.3019 3.76354 11.075 4.08379 11.6591 3.715L12.3279 3.29266C13.229 2.72363 14.2764 3.771 13.7073 4.67212L13.285 5.34094C12.9162 5.92495 13.2365 6.6981 13.9102 6.85029L14.6818 7.02458C15.7213 7.25939 15.7213 8.74061 14.6818 8.97542L13.9102 9.14971C13.2365 9.3019 12.9162 10.075 13.285 10.6591L13.7073 11.3279C14.2764 12.229 13.229 13.2764 12.3279 12.7073L11.6591 12.285C11.075 11.9162 10.3019 12.2365 10.1497 12.9102L9.97542 13.6818C9.74061 14.7213 8.25939 14.7213 8.02458 13.6818L7.85029 12.9102C7.6981 12.2365 6.92495 11.9162 6.34094 12.285L5.67212 12.7073C4.771 13.2764 3.72363 12.229 4.29266 11.3279L4.715 10.6591C5.08379 10.075 4.76354 9.3019 4.08981 9.14971L3.31824 8.97542C2.27869 8.74061 2.27869 7.25939 3.31824 7.02458L4.08981 6.85029C4.76354 6.6981 5.08379 5.92495 4.715 5.34094L4.29266 4.67212C3.72363 3.771 4.771 2.72363 5.67212 3.29266L6.34094 3.715C6.92495 4.08379 7.6981 3.76354 7.85029 3.08981L8.02458 2.31824Z" fill={color} />
            </g>
            <defs>
                <filter id="filter0_d_1627_13607" x="0.439063" y="0.438574" width="17.1219" height="17.1229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.05" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1627_13607" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1627_13607" result="shape" />
                </filter>
            </defs>
        </svg>
    )
};export default Star2Icon;