import { JSX } from "preact";
import { Signal, useSignal } from "@preact/signals";

interface ITextInputProps {
    binding: Signal<string|number|undefined>;
    num?: boolean;
    maxSuggest?: number;
    options?: Array<string>;
    onChange?: () => void;
}
export default (props: ITextInputProps & JSX.HTMLAttributes<HTMLInputElement>) => {
    const { binding, num, options, maxSuggest, class: className, onChange, ...rest} = props;
    const max = maxSuggest ?? 12;
    const suggestions = useSignal<Array<string>>([]);
    const handleBlur = () => setTimeout(() => suggestions.value = [], 200);
    const handleInput = (e: Event) => {
        const text = (e.target as HTMLInputElement).value;
        binding.value = num ? +text : text;
        if (options) {
            const content = binding.value.toString();
            if (content) {
                const first: Array<string> = [];
                const second: Array<string> = [];
                for (const option of options) {
                    if (option.startsWith(content)) first.push(option);
                    else if (option.includes(content)) second.push(option);
                    if (first.length >= max) break;
                }
                suggestions.value = first.concat(second.slice(0, max - first.length));
            } else suggestions.value = [];
        }
    };
    const suggestionClicked = (e: Event) => {
        binding.value = (e.target as HTMLDivElement).textContent ?? '';
        if (onChange) onChange();
    }
    return <div class={`input_4Xa52 ${className ?? ''}`} >
        <input {...rest} value={binding.value?.toString()} onInput={handleInput} onBlur={handleBlur}/>
        {suggestions.value.length ? <div>{suggestions.value.map((s: string) => <div onClick={suggestionClicked}>{s}</div>)}</div> : ''}
    </div>;
}