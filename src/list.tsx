import { JSX, VNode } from "preact";
import { Signal } from "@preact/signals";
import { Options } from "./options.ts";

export default ({ options, cindex, class: className, activeClass }: {
    options: Options
    cindex: Signal<number>
    activeClass?: string
} & JSX.HTMLAttributes<HTMLDivElement>): Array<VNode<HTMLDivElement>> =>
    options.map((option, i) => <div key={i} onClick={() => cindex.value = i}
        class={`${className ?? ''} ${cindex.value == i ? activeClass : ''}`}>{option.label}</div>)