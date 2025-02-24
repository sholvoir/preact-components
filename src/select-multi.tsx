// deno-lint-ignore-file no-explicit-any
import { JSX, VNode } from "preact";
import { IMultiSlectProps } from "../lib/options.ts";

export default (props: IMultiSlectProps & JSX.FieldsetHTMLAttributes<HTMLFieldSetElement>): VNode<HTMLFieldSetElement> => {
    const {options, binding, title, disabled, class: className, ...rest} = props;
    const handleOptionClick = (e: Event) => {
        const value = (e.currentTarget as HTMLDivElement).title as string|number;
        const index = binding.value.indexOf(value);
        if (index > -1) binding.value = [...binding.value.slice(0,index), ...binding.value.slice(index + 1)];
        else binding.value = [...binding.value, value];
    }
    return <fieldset class={`border rounded px-2 ${className ?? ''}`} aria-disabled={disabled} {...rest}>
        <legend>{title}</legend>
        {options.map((option, i) =>
            <div class="flex gap-1 cursor-pointer items-center" key={i} title={option.value as any} onClick={handleOptionClick}>
                <span class={binding.value.includes(option.value)?"i-material-symbols-check-box-outline":"i-material-symbols-check-box-outline-blank"}/>
                <span>{option.label}</span>
            </div>
        )}
    </fieldset>
}