import { JSX, VNode } from "preact"
import { Signal, useSignal } from "@preact/signals"
import { wait } from "@sholvoir/generic/wait";

export default ({ class: className, cindex, children }: {
    cindex: Signal<number>;
} & JSX.HTMLAttributes<HTMLElement>) => {
    const childs: Array<VNode<HTMLElement>> = Array.isArray(children) ? children : [children];
    const startX = useSignal(0);
    const endX = useSignal(0);
    const continueMove = async (x: number, max: number) => {
        endX.value += x;
        const diff = Math.abs(endX.value - startX.value);
        if (diff < max) {
            await wait(30);
            await continueMove(x, max);
        };
    };
    const handleTouchStart = (e: JSX.TargetedTouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
        endX.value = startX.value = e.touches[0].clientX
    }
    const handleTouchMove = (e: JSX.TargetedTouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
        endX.value = e.touches[0].clientX
    }
    const handleTouchCancel = (e: JSX.TargetedTouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
        endX.value = startX.value = 0
    }
    const handleTouchEnd = async (e: JSX.TargetedTouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const diff = endX.value - startX.value;
        const max = globalThis.innerWidth;
        if (Math.abs(diff) >= max / 6) { // 滑动超过阈值，触发操作
            if (diff > 0) { //右划, 去前一Tab
                await continueMove(60, max);
                if (cindex.value > 0) cindex.value--;
            } else { //左划, 去后一个Tab
                await continueMove(-60, max)
                if (cindex.value < childs.length -1) cindex.value++;
            }
        }
        endX.value = startX.value = 0;
    }
    return childs.length ? <>
        <header class="flex gap-2">{childs?.map((child, i) =>
            <div key={i} class={`min-w-16 px-2 py-1 cursor-pointer text-center rounded-t-md ${cindex.value == i ? className ?? '' : ''}`}
                onClick={(e) => (e.stopPropagation(), cindex.value = i)}>{child.props.title ?? i}
            </div>
        )}</header>
        <section class={`relative grow p-2 overflow-y-auto ${className ?? ''}`}
            style={{ top: `${endX.value - startX.value}px` }}
            onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
            onTouchCancel={handleTouchCancel} onTouchEnd={handleTouchEnd}>
            {childs[cindex.value]}
        </section>
    </> : <></>;
}