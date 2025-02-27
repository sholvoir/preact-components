// deno-lint-ignore-file no-explicit-any
import { JSX, VNode } from "preact";
import { IMultiSlectProps } from "./options.ts";

export default ({ options, binding }: IMultiSlectProps):
    Array<VNode<HTMLDivElement>> => {
    const handleOptionClick = (e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
        const value = e.currentTarget.title;
        const index = binding.value.indexOf(value);
        if (index > -1) binding.value = [
            ...binding.value.slice(0, index),
            ...binding.value.slice(index + 1)
        ];
        else binding.value = [...binding.value, value];
    }
    return options.map((option, i): VNode<HTMLDivElement> =>
        <div class="flex gap-1 cursor-pointer items-center" key={i}
            title={option.value as any} onClick={handleOptionClick}>
            <span class={binding.value.includes(option.value) ?
                "i-material-symbols-check-box-outline" :
                "i-material-symbols-check-box-outline-blank"} />
            <span>{option.label}</span>
        </div>
    )
}