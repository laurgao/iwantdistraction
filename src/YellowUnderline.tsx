const YellowUnderline = ({ children }: { children: string }) => {
    return (
        <div className="inline-block">
            <span>{children}</span>
            <div className="border-b-8 border-amber-300 -mt-2.5 z-[-10] relative" style={{ transform: "translateX(0.75rem)" }}></div>
        </div>
    );
};

export default YellowUnderline;
