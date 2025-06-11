import { FC } from "react";


interface Props {
    color?: string,
}

const StarIcon: FC<Props> = ({ color = "#FFE031" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1627_13673)">
                <path d="M9.04894 1.92705C9.3483 1.00574 10.6517 1.00574 10.9511 1.92705L12.0206 5.21885C12.1545 5.63087 12.5385 5.90983 12.9717 5.90983H16.4329C17.4016 5.90983 17.8044 7.14945 17.0207 7.71885L14.2205 9.75329C13.87 10.0079 13.7234 10.4593 13.8572 10.8713L14.9268 14.1631C15.2261 15.0844 14.1717 15.8506 13.388 15.2812L10.5878 13.2467C10.2373 12.9921 9.7627 12.9921 9.41221 13.2467L6.61204 15.2812C5.82833 15.8506 4.77385 15.0844 5.0732 14.1631L6.14277 10.8713C6.27665 10.4593 6.12999 10.0079 5.7795 9.75329L2.97933 7.71885C2.19562 7.14945 2.59839 5.90983 3.56712 5.90983H7.02832C7.46154 5.90983 7.8455 5.63087 7.97937 5.21885L9.04894 1.92705Z" fill={color} />
            </g>
            <defs>
                <filter id="filter0_d_1627_13673" x="0.46543" y="0.136069" width="19.0691" height="18.4406" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.05" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1627_13673" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1627_13673" result="shape" />
                </filter>
            </defs>
        </svg>
    )
};export default StarIcon;