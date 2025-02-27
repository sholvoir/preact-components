import { JSX, VNode } from "preact"
import { Signal } from "@preact/signals"

export default ({class: className, cindex, children, ...rest}: {
    cindex: Signal<number>;
} & JSX.HTMLAttributes<HTMLElement>): VNode<HTMLElement> => {
    const childs: Array<VNode<HTMLElement>> = Array.isArray(children) ? children : [children];
    return <article class={`stab flex flex-col ${className??''}`} {...rest}> {
        childs.length ? <>
            <header class="flex gap-2">{childs?.map((child, i) =>
                <div key={i} class={`min-w-16 cursor-pointer text-center rounded-t-md px-2 ${cindex.value==i?"bg-[var(--bg-tab)]":""}`}
                    onClick={()=>cindex.value=i}>{child.props.title??i}
                </div>
            )}</header>
            <section class="grow p-2 bg-[var(--bg-tab)]">{childs[cindex.value]}</section>
        </> : ''
    }
    </article>;
}