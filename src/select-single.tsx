// deno-lint-ignore-file no-explicit-any
import { VNode } from "preact";
import { ISingleSlectProps } from "./options.ts";

export default ({ options, binding }: ISingleSlectProps):
    Array<VNode<HTMLDivElement>> => options.map((option, i) =>
    <div class="flex gap-1 cursor-pointer items-center" title={option.value}
        key={i} onClick={e => binding.value = e.currentTarget.title}>
        <span class={option.value == binding.value ?
            "i-material-symbols-check-box-outline" :
            "i-material-symbols-check-box-outline-blank"} />
        <span>{option.label}</span>
    </div>
)