import "./App.css";
import Item from "./Item";

function App() {
    const shit = [
        {
            id: "rewatching",
            laurasList: `Ryan Ng's college rejection: https://youtu.be/BNUFcqn-aj0
we'll never have sex, stop motion mv: https://youtu.be/EHFvp36TfYM
jackie liu's paintings: https://youtu.be/oOXXuwTPJYQ
3b1b cross products: https://youtu.be/nEX-9exMc1A
the one skill all animators need: https://youtu.be/LcWJKYbYvi8`,
        },
        {
            id: "rereading",
            laurasList: `https://patrickcollison.com/advice
https://ldeming.posthaven.com/advice-for-ambitious-teenagers
enchiridion!
meditations
le mythe de sisyphe
meditations on moloch
the cook and the chef?
any david perell long form article`,
        },
        {
            id: "trying",
            laurasList: `quick fun lil projects:
MIT opencourseware multivar (+ e&m?)
make myself an hpmor hard copy: https://github.com/kabakchey/hpmor-1
make this website into a chrome ext that shows up when i go to youtube`,
        },
    ];
    return (
        <div className="relative overflow-x-hidden">
            <div className="font-semibold text-xs">
                {/* feels kinda meaningless w/o scale o provide conex */}
                {/* <p className="absolute right-8 top-8 text-amber-300">most braindead</p>
                <p className="absolute right-8 bottom-8 text-white">least braindead</p> */}
                {/* kinda ugly */}
                {/* <pre className="overflow-whee absolute -ml-9 top-0 text-amber-300">{"braindead ".repeat(50)}</pre>
                <pre className="overflow-whee absolute -ml-2 top-3 text-amber-300">{"braindead ".repeat(50)}</pre>
                <pre className="overflow-whee absolute -ml-7 top-6 text-amber-300">{"braindead ".repeat(50)}</pre>
                <pre className="overflow-whee absolute -ml-4 top-9 text-amber-300">{"braindead ".repeat(50)}</pre>
                <pre className="overflow-whee absolute -ml-2 bottom-9 text-white">{"brainfresh ".repeat(50)}</pre>
                <pre className="overflow-whee absolute -ml-9 bottom-6 text-white">{"brainfresh ".repeat(50)}</pre>
                <pre className="overflow-whee absolute -ml-7 bottom-3 text-white">{"brainfresh ".repeat(50)}</pre>
                <pre className="overflow-whee absolute -ml-4 bottom-0 text-white">{"brainfresh ".repeat(50)}</pre> */}
            </div>
            <div className="max-w-4xl mx-auto px-4 py-36">
                <header className="text-center px-4 mb-12">
                    <h1 className="text-6xl mb-12">instead of youtube shorts</h1>
                    <p>
                        distractions are not caused by social media or by any "external trigger",{" "}
                        <a href="https://fs.blog/knowledge-project-podcast/nir-eyal/" className="underline hover:bg-amber-400 transition">
                            according to psychology writer Nir Eyal
                        </a>
                        . distractions are caused by a desire from the inside to escape negative emotions — boredom, anxiety, stress, you name it.
                        <br />
                        <br />
                        time management requires pain management. procrastination is the inability to deal with emotional discomfort.
                        <br />
                        <br />
                        still want to be distracted? try indulging in these:
                    </p>
                </header>
                {shit.map((el) => (
                    <Item key={el.id} el={el} />
                ))}
            </div>
        </div>
    );
}

export default App;
