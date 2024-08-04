// deno-lint-ignore-file no-explicit-any
import { JSX } from "preact/jsx-runtime";
import { Signal } from "@preact/signals";
import { Options } from "../lib/options.ts";
import IconCheck from "./icon-check.tsx";

interface ISlectProps {
    options: Options;
    binding: Signal<string|number>;
    disabled?: boolean;
}
export default (props: ISlectProps & JSX.HTMLAttributes<HTMLFieldSetElement>) => {
    const {options, binding, title, disabled, class: className, ...rest} = props;
    const handleOptionClick = (e: Event) => {
        binding.value = (e.currentTarget as HTMLDivElement).title as string|number;
    }
    return <fieldset class={`select ${className ?? ''}`} aria-disabled={disabled} {...rest}>
        <legend>{title}</legend>
        {options.map(option =>
            <div title={option.value as any} onClick={handleOptionClick}>
                <div>{option.value == binding.value && <IconCheck/>}</div>
                <div>{option.label}</div>
            </div>
        )}
    </fieldset>
}