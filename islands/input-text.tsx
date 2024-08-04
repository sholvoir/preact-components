import { JSX } from "preact";
import { Signal } from "@preact/signals";

interface ITextInputProps extends JSX.HTMLAttributes<HTMLInputElement>{
    binding: Signal<string|number|undefined>;
    num?: boolean;
}
export default (props: ITextInputProps) => {
    const { type, num, binding, ...rest} = props;
    const handleInput = (e: Event) => {
        const text = (e.target as HTMLInputElement).value;
        binding.value = num ? +text : text;
    }
    return <input type={type ?? 'text'} {...rest} value={binding.value} onInput={handleInput}/>;
}