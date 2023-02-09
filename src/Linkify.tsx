const Linkify = ({ children, options }: { children: string; options: Omit<React.HTMLProps<HTMLAnchorElement>, "href"> }) => {
    const linksRegex = /((http)s?:\/\/)?([^\s.]+\.[^\s.]+)(\.[^\s.]+)*(\/[^\s.]*)*/g;
    const links = children.match(linksRegex);
    const words = children.split(new RegExp(links?.join("|") || ""));
    // const x = children.replace(linksRegex, (match) => `<a href=${match}>${match}</a>`);
    return (
        <pre>
            {words.map((word, i) => (
                <>
                    <span>{word}</span>
                    {i !== words.length - 1 && links && links.length && (
                        <a {...options} href={links[i]}>
                            {links[i]}
                        </a>
                    )}
                </>
            ))}
        </pre>
    );
};

export default Linkify;
