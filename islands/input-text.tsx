import { JSX } from "preact";
import { Signal, useSignal } from "@preact/signals";

interface ITextInputProps {
    binding: Signal<string|number|undefined>;
    num?: boolean;
    maxSuggest?: number;
    options?: Array<string>;
}
export default (props: ITextInputProps & JSX.HTMLAttributes<HTMLInputElement>) => {
    const { binding, num, options, maxSuggest, class: className, ...rest} = props;
    const max = maxSuggest ?? 12;
    const suggestions = useSignal<Array<string>>([]);
    const handleInput = (e: Event) => {
        const text = (e.target as HTMLInputElement).value;
        binding.value = num ? +text : text;
        const content = binding.value.toString();
        if (options && content) {
            const suggests: Array<string> = [];
            for (const option of options) if (option.includes(content)) {
                suggests.push(option);
                if (suggests.length >= max) break;
            }
            suggestions.value = suggests;
        }
    };
    const suggestionClicked = (e: Event) => {
        binding.value = (e.target as HTMLDivElement).textContent ?? '';
        suggestions.value = [];
    }
    return <div class={`input_4Xa52 ${className ?? ''}`} >
        <input {...rest} value={binding.value?.toString()} onInput={handleInput}/>
        {suggestions.value.length ? <div>{suggestions.value.map((s: string) => <div onClick={suggestionClicked}>{s}</div>)}</div> : ''}
    </div>;
}