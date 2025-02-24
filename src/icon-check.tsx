import { JSX, VNode } from "preact";

export default (props: JSX.SVGAttributes<SVGSVGElement>): VNode<SVGElement> =>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path d="M26.356 4.125L12.25 18.584 5.643 12.32 1 16.965l11.25 10.91L31 8.769z" />
    </svg>