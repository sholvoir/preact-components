// deno-lint-ignore-file no-explicit-any
import { JSX } from "preact/jsx-runtime";
import { Signal } from "@preact/signals";

interface ISlectProps {
    options: Array<{value: string|number, label: string}>;
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
                <div>{binding.value.includes(option.value) && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>}</div>
                <div>{option.label}</div>
            </div>
        )}
    </fieldset>
}