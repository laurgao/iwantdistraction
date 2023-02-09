const Linkify = ({ children, options }: { children: string; options: HTMLAnchorElement }) => {
    const x = children.replace(/(https?:\/\/[^\s]+)/g, (match) => `<a href=${match}>${match}</a>`);
    return <div>{x}</div>;
};

export default Linkify;
