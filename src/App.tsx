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
        <div className="max-w-4xl mx-auto p-4">
            <header className="text-center px-4 mb-12 mt-12">
                <h1 className="text-6xl mb-12">instead of youtube shorts</h1>
                <p>
                    Distractions are not caused by social media or by any "external trigger",{" "}
                    <a href="https://fs.blog/knowledge-project-podcast/nir-eyal/" className="underline hover:bg-amber-300 transition">
                        according to psychology writer Nir Eyal
                    </a>
                    . Distractions are caused by a desire from the inside to escape negative emotions — boredom, anxiety, stress, you name it.
                    <br />
                    <br />
                    Time management requires pain management. Procrastination is the inability to deal with emotional discomfort.
                    <br />
                    <br />
                    Still want to be distracted? Try indulging in these:
                </p>
            </header>
            {shit.map((el) => (
                <Item key={el.id} el={el} />
            ))}
        </div>
    );
}

export default App;
