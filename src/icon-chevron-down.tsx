import { JSX, VNode } from "preact";

export default (props: JSX.SVGAttributes<SVGSVGElement>): VNode<SVGElement> =>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"{...props}>
        <path d="m 6,7 a 2,2 0 0 0 -1.4140625,0.5859375 2,2 0 0 0 0,2.8281255 l 6.0000005,5.999999 a 2.0002,2.0002 0 0 0 2.828125,0 l 5.999999,-5.999999 a 2,2 0 0 0 0,-2.8281255 2,2 0 0 0 -2.828125,0 L 12,12.171875 7.4140625,7.5859375 A 2,2 0 0 0 6,7 Z"/>
    </svg>