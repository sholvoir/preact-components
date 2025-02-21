import { VNode } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { countryCodes } from "../lib/country-code.ts";
import BButton from './button-base.tsx';
import RButton from './button-ripple.tsx';
import Checkbox from './checkbox.tsx';
import InputText from './input-text.tsx';
import InputTextArea from './input-textarea.tsx';
import SSelect from './select-single.tsx';
import MSelect from './select-multi.tsx';
import DropDown from './dropdown.tsx';

export default (): VNode<HTMLDivElement> => {
    if (!IS_BROWSER) return <div/>;
    const checkbox1 = useSignal(false);
    const checkbox2 = useSignal(true);
    const n = useSignal('');
    const txt = useSignal('Tfhsak');
    const sslec = useSignal('1');
    const mslec = useSignal(['3', '5']);
    const code = useSignal(1);
    const options = [
        { value: '1', label: "a" },
        { value: '2', label: "b" },
        { value: '3', label: "c" },
        { value: '4', label: "d" },
        { value: '5', label: "e" },
        { value: '6', label: "f" },
        { value: '7', label: "g" },
        { value: '8', label: "h" }
    ];
    const suggestions = ['abc', 'abd', 'gwetf', 'fsdfa'];
    const xx = () => console.log("OnChange, n: ", n.value);
    return <div>
        <BButton>ButtonAntiShake</BButton><br />
        <BButton disabled>ButtonAntiShake</BButton><br />
        <RButton>ButtonAnchor</RButton><br />
        <RButton disabled>ButtonAnchor</RButton><br />
        <Checkbox binding={checkbox1} label="Enabled Checkbox" /><br />
        <Checkbox binding={checkbox2} disabled label="Disabled Checkbox" /><br />
        <InputText binding={n} options={suggestions} onChange={xx} /><br />
        <InputTextArea binding={txt} /><br />
        <SSelect binding={sslec} options={options} title="Single Select" />
        <MSelect binding={mslec} options={options} title="Multi Select" />
        <DropDown binding={code} options={countryCodes} title="Unied States"/>
    </div>;
}