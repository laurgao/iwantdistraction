import { Dispatch, FormEvent, SetStateAction, useEffect, useRef } from "react";

type Props = Omit<React.HTMLProps<HTMLDivElement>, "contentEditable"> & {
    setValue?: Dispatch<SetStateAction<string>>;
    name?: string;
    rows?: number;
    onChange?: (e: InputEvent) => void;
};

const AutoresizingTextarea = (props: Props) => {
    let { value, setValue, onChange, placeholder, className, rows, style, ...newProps } = props;

    const ref = useRef<HTMLDivElement>();
    useEffect(() => {
        // @ts-ignore ref is not undefined.
        if (ref.current.innerText !== value) ref.current.innerText = value;
    }, [value]);

    function handleChange(event: FormEvent<HTMLDivElement>) {
        if (!ref.current) return;
        // @ts-ignore
        if (!event.target || (event.target.innerText !== "" && !event.target.innerText)) return;
        // @ts-ignore
        if (setValue) setValue(event.target.innerText);
        if (onChange) onChange(event);

        // if (event.target.innerText.length === 0) {
        //     console.log(placeholderRef.current);
        //     ref.current.style.height = document.querySelector("#placeholder")?.clientHeight + "px";
        // }
    }

    if (!rows) rows = 0;
    if (!style) style = { minHeight: rows * 30 };

    const paddingClass = "p-4";
    const newClassName = className + " border rounded-md w-full my-2 text-stone-500 " + paddingClass;
    return (
        <div className="relative">
            {/* @ts-ignore ref error */}
            <div {...newProps} style={style} className={newClassName} contentEditable onInput={handleChange} ref={ref} />
            <div className={"absolute top-0 left-0 text-stone-400 " + paddingClass} style={{ zIndex: -10 }}>
                <pre>{!value && placeholder}</pre>
            </div>
        </div>
    );
};

export default AutoresizingTextarea;
