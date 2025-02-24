// deno-lint-ignore-file no-explicit-any
import { JSX, VNode } from "preact";
import { ISingleSlectProps } from "../lib/options.ts";
import IconCheck from "./icon-check.tsx";

export default (props: ISingleSlectProps & JSX.FieldsetHTMLAttributes<HTMLFieldSetElement>): VNode<HTMLFieldSetElement> => {
    const {options, binding, title, disabled, class: className, ...rest} = props;
    const handleOptionClick = (e: Event) => {
        binding.value = (e.currentTarget as HTMLDivElement).title as string|number;
    }
    return <fieldset class={`border rounded px-2 ${className ?? ''}`} aria-disabled={disabled} {...rest}>
        <legend>{title}</legend>
        {options.map((option, i) =>
            <div class="flex gap-1 cursor-pointer items-center" key={i} title={option.value as any} onClick={handleOptionClick}>
                <div class="w-4 h-4">{option.value == binding.value && <IconCheck class="w-full h-full"/>}</div>
                <div>{option.label}</div>
            </div>
        )}
    </fieldset>
}