import { useSignal } from "@preact/signals";
import BButton from '../islands/button-base.tsx';
import RButton from '../islands/button-ripple.tsx';
import Checkbox from '../islands/checkbox.tsx';
import InputText from '../islands/input-text.tsx';
import InputTextArea from '../islands/input-textarea.tsx';
import SSelect from '../islands/select-single.tsx';
import MSelect from '../islands/select-multi.tsx';

export default function Home() {
  const checkbox1 = useSignal(false);
  const checkbox2 = useSignal(true);
  const n = useSignal(5);
  const txt = useSignal('Tfhsak');
  const sslec = useSignal('1');
  const mslec = useSignal(['3','5']);
  const options = [
    {value: '1', label: "a"},
    {value: '2', label: "b"},
    {value: '3', label: "c"},
    {value: '4', label: "d"},
    {value: '5', label: "e"},
    {value: '6', label: "f"},
    {value: '7', label: "g"},
    {value: '8', label: "h"}
  ]
  return <>
    <BButton>ButtonAntiShake</BButton><br/>
    <BButton disabled>ButtonAntiShake</BButton><br/>
    <RButton>ButtonAnchor</RButton><br/>
    <RButton disabled>ButtonAnchor</RButton><br/>
    <Checkbox binding={checkbox1} label="Enabled Checkbox"/><br/>
    <Checkbox binding={checkbox2} disabled label="Disabled Checkbox"/><br/>
    <InputText binding={n} num/><br/>
    <InputTextArea binding={txt}/><br/>
    <SSelect binding={sslec} options={options} title="Single Select"/>
    <MSelect binding={mslec} options={options} title="Multi Select"/>
  </>;
}
