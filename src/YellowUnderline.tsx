const YellowUnderline = ({ children }: { children: string }) => {
    return (
        <div className="inline-block relative">
            <span>{children}</span>
            <div className="absolute inset-0 border-b-8 border-amber-300 z-[-10]" style={{ transform: "translateX(0.75rem)" }}></div>
        </div>
    );
};

export default YellowUnderline;
