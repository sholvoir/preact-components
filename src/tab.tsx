import { JSX, VNode } from "preact"
import { Signal } from "@preact/signals"

export default ({class: className, titles, cindex, children, ...rest}: {
    titles?: Array<string>;
    cindex: Signal<number>;
} & JSX.HTMLAttributes<HTMLElement>): VNode<HTMLElement> => 
<article class={`flex flex-col ${className??''}`} {...rest}>
    <header class="flex">{titles?.map((title, i) =>
        <div key={i} class={`text-center rounded-t-md ${cindex.value==i?"active":""}`}
            onClick={()=>cindex.value=i}>{title}
        </div>
    )}</header>
    <section class={`grow ${(titles?.length ?? 0) > 1 ? 'p-2': ''}`}>{children}</section>
</article>;