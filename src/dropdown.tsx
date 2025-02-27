// deno-lint-ignore-file no-explicit-any
import { JSX, VNode } from "preact";
import { useSignal } from "@preact/signals";
import { ISingleSlectProps } from "./options.ts";
import ButtonBase from './button-base.tsx';

export default (props: ISingleSlectProps & JSX.HTMLAttributes<HTMLButtonElement>): VNode<HTMLButtonElement> => {
    const { class: className, binding, options, title, ...rest} = props;
    const isOpen = useSignal(false);
    const content = useSignal(title);
    const handleOptionClick = (e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
        const div = e.currentTarget;
        binding.value = div.title;
        content.value = div.innerText;
        isOpen.value = false;
    }
    const handleClick = () => {
        isOpen.value = !isOpen.value;
    };
    return <ButtonBase onClick={handleClick} {...rest}
        class={`relative px-2 flex gap-2 justify-between items-center ${className??''}`}>
        <span>{content}</span>
        <span class="i-mdi-chevron-down"/>
        {isOpen.value && <div class="absolute top-[calc(100%_+_4px)] max-h-64 z-100 bg-[var(--bg-body)] inset-x-0 border overflow-y-auto text-left">
            {options.map((option, i) => <div key={i} title={option.value} onClick={handleOptionClick}
                class={`px-2 ${option.value==binding.value?'bg-[var(--bg-tab)]':''}`}
                >{option.label}
            </div>)}
        </div>}
    </ButtonBase>;
}