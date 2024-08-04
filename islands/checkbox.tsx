// deno-lint-ignore-file no-explicit-any
import { JSX } from "preact";
import { Signal } from "@preact/signals";

interface ICheckboxProps {
    binding: Signal<boolean>;
    label?: string;
    disabled?: boolean;
}
export default (props: ICheckboxProps & JSX.HTMLAttributes<HTMLDivElement>) => {
    const { label, binding, disabled, class: className, onChange, ...rest} = props;
    const handleClick = (e: any) => {
        if (!disabled) {
            binding.value = !binding.value;
            if (onChange) onChange(e);
        }
    }
    return <div class={`check-box ${className ?? ''}`} aria-disabled={disabled} onClick={handleClick} {...rest}>
        <div>
            {binding.value?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>:''}
        </div>
        <div>{label}</div>
    </div>
}