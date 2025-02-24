import { JSX, VNode } from "preact";
import { Signal } from "@preact/signals";

export default ({ binding, class: className, ...rest }: {
    binding: Signal<string | undefined>
} & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>): VNode<HTMLTextAreaElement> =>
    <textarea class={`px-2 outline-none border rounded ${className??''}`} {...rest} value={binding.value} onInput={e => binding.value = e.currentTarget.value} />;
