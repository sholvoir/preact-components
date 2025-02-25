import { JSX, VNode } from "preact";
import { Signal } from "@preact/signals";
import { Options } from "./options.ts";

export default ({options, cindex, ...rest}: {
    options: Options
    cindex: Signal<number>
} & JSX.HTMLAttributes<HTMLDivElement>): VNode<HTMLDivElement> =>
<div {...rest}>
    {options.map((option, i) => <div key={i} onClick={()=>cindex.value=i}>{option.label}</div>)}
</div>