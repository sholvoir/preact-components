// deno-lint-ignore-file no-explicit-any
import { JSX, VNode } from "preact";
import { ISingleSlectProps } from "../lib/options.ts";

export default (props: ISingleSlectProps & JSX.FieldsetHTMLAttributes<HTMLFieldSetElement>): VNode<HTMLFieldSetElement> => {
    const {options, binding, title, disabled, class: className, ...rest} = props;
    const handleOptionClick = (e: Event) => {
        binding.value = (e.currentTarget as HTMLDivElement).title as string|number;
    }
    return <fieldset class={`border rounded px-2 ${className ?? ''}`} aria-disabled={disabled} {...rest}>
        <legend>{title}</legend>
        {options.map((option, i) =>
            <div class="flex gap-1 cursor-pointer items-center" key={i} title={option.value as any} onClick={handleOptionClick}>
                <span class={option.value==binding.value?"i-material-symbols-check-box-outline":"i-material-symbols-check-box-outline-blank"}/>
                <span>{option.label}</span>
            </div>
        )}
    </fieldset>
}