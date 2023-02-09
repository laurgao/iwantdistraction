import "./App.css";
import TextArea from "./TextArea";
import YellowUnderline from "./YellowUnderline";

function App() {
    const shit = ["rewatching", "rereading", "trying"];
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
                <div className="mb-6">
                    <h3 className="text-stone-700 font-bold px-4 mb-4">
                        shit worth <YellowUnderline>{el}</YellowUnderline>
                    </h3>
                    <TextArea id={el} />
                </div>
            ))}
        </div>
    );
}

export default App;
