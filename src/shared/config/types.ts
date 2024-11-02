import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
    className?: string;
    translate?: string;
    sizeClass?: string;
    fontSize?: string;
    //
    loading?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    outlined?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    href?: string;
    targetBlank?: boolean;
    onClick?: () => void;
    children?: ReactNode;
};

export type ProjectTypes = {
    title : string,
    description ?: string,
    tech : Array<string>,
    code ?: string,
    live ?: string,
    thumnail : string,
    featured ?: boolean,
    secondary ?: boolean,
}