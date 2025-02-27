import { Signal } from "@preact/signals";

export interface Option {
    value: string;
    label: string;
}

export type Options = Array<Option>;

export interface ISingleSlectProps {
    options: Options;
    binding: Signal<string>;
    disabled?: boolean;
}

export interface IMultiSlectProps {
    options: Options;
    binding: Signal<Array<string>>;
    disabled?: boolean;
}