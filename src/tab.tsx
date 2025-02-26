import { JSX, VNode } from "preact"
import { Signal } from "@preact/signals"
import './home.css';

export default ({class: className, cindex, children, ...rest}: {
    cindex: Signal<number>;
} & JSX.HTMLAttributes<HTMLElement>): VNode<HTMLElement> => {
    const childs: Array<VNode<HTMLElement>> = Array.isArray(children) ? children : [children];
    return <article class={`tab_iho3g flex flex-col ${className??''}`} {...rest}>
        <header class="flex gap-2">{childs?.map((child, i) =>
            <div key={i} class={`text-center rounded-t-md px-2 ${cindex.value==i?"active":""}`}
                onClick={()=>cindex.value=i}>{child.props.title??i}
            </div>
        )}</header>
        <section class="grow p-2">{childs[cindex.value]}</section>
    </article>;
}