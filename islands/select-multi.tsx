// deno-lint-ignore-file no-explicit-any
import { JSX } from "preact/jsx-runtime";
import { Signal } from "@preact/signals";
import { Options } from "../lib/options.ts";
import IconCheck from "./icon-check.tsx";

interface ISlectProps {
    options: Options;
    binding: Signal<Array<string|number>>;
    disabled?: boolean;
}
export default (props: ISlectProps & JSX.HTMLAttributes<HTMLFieldSetElement>) => {
    const {options, binding, title, disabled, class: className, ...rest} = props;
    const handleOptionClick = (e: Event) => {
        const value = (e.currentTarget as HTMLDivElement).title as string|number;
        const index = binding.value.indexOf(value);
        if (index > -1) binding.value = [...binding.value.slice(0,index), ...binding.value.slice(index + 1)];
        else binding.value = [...binding.value, value];
    }
    return <fieldset class={`select ${className ?? ''}`} aria-disabled={disabled} {...rest}>
        <legend>{title}</legend>
        {options.map(option =>
            <div title={option.value as any} onClick={handleOptionClick}>
                <div>{binding.value.includes(option.value) && <IconCheck/>}</div>
                <div>{option.label}</div>
            </div>
        )}
    </fieldset>
}