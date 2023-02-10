import { CheckBadgeIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AutoresizingTextarea from "./AutoresizingTextarea";
import Linkify from "./Linkify";
import { useInterval } from "./utils/hooks";
import { waitForEl } from "./utils/utils";
import YellowUnderline from "./YellowUnderline";

const Item = ({ el }: { el: { id: string; laurasList: string } }) => {
    const LOCAL_STORAGE_KEY = "iwantdistraction";
    const [content, setContent] = useState(localStorage.getItem(LOCAL_STORAGE_KEY + "." + el.id) || "");
    const [isEdit, setIsEdit] = useState(false);
    const [isSaved, setIsSaved] = useState(true);
    const canEdit = true;
    const placeholder = "Dump your links...";

    function onSetIsNotEdit() {
        // Always call this function when want to call `setIsEdit(false)`
        // if (body.length === 0) {
        //     alert("Are you sure you want to delete this note?")
        // }
        saveNote();
        setIsEdit(false);
        // toggleDisallowNShortcut(false);
    }

    useInterval(saveNote, isSaved ? null : 1000);

    function saveNote() {
        if (!isSaved) {
            if (content.length > 0) {
                // axios.post(`/api/note`, { id: note._id, body: body }).then(() => {
                //     dispatch({ type: 'setIsSaved' });
                //     setIter(prevIter => prevIter + 1);
                // });
            }
            localStorage.setItem(LOCAL_STORAGE_KEY + "." + el.id, content);
            setIsSaved(true);
        }
    }

    return (
        <div className="mb-6">
            <div className="flex items-center w-full mb-2">
                <h3 className="text-stone-700 font-bold px-4 text-sm">
                    shit worth <YellowUnderline>{el.id}</YellowUnderline>
                </h3>
                {!content && (
                    <button
                        className="ml-auto flex items-center gap-2 font-medium border-2 border-stone-900 border-opacity-70 hover:bg-stone-900 hover:bg-opacity-70 hover:border-transparent text-stone-900 hover:text-stone-100 text-opacity-70 transition rounded-md py-1 px-2 text-sm"
                        // className="ml-auto flex items-center gap-2 font-medium bg-stone-900 bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-40 text-stone-900 text-opacity-70 transition rounded-md py-1 px-2 text-sm"
                        onClick={() => {
                            // navigator.clipboard.writeText(el.laurasList);
                            setContent(el.laurasList);
                            const bodyText = document.getElementById(`${el.id}-body`);
                            bodyText?.click();
                        }}
                    >
                        <LightBulbIcon width={16} />
                        <span>laura's list</span>
                    </button>
                )}
            </div>
            {!isEdit ? (
                <div
                    className={`overflow-hidden break-words ${
                        canEdit && "cursor-pointer hover:bg-stone-900 hover:bg-opacity-5 p-4 rounded-md transition border border-transparent"
                    }`}
                    onClick={() => {
                        if (canEdit) {
                            setIsEdit(true);
                            waitForEl(`${el.id}-note-body`);
                            // toggleDisallowNShortcut(true);
                        }
                    }}
                    id={`${el.id}-body`}
                >
                    <div className={content ? "text-stone-900 text-opacity-70" : "text-stone-900 text-opacity-40"}>
                        <Linkify options={{ className: `underline hover:bg-amber-400 transition` }}>{content || placeholder}</Linkify>
                    </div>
                </div>
            ) : (
                /* <Input type="date" value={date} setValue={setDate} className="my-8" /> */
                <div>
                    <AutoresizingTextarea
                        onBlur={onSetIsNotEdit}
                        type="textarea"
                        value={content}
                        onChange={(e) => {
                            if (!e.target) return;
                            // @ts-ignore
                            if (typeof "" !== typeof e.target.innerText) return;
                            // @ts-ignore
                            setContent(e.target.innerText);
                            setIsSaved(false);
                        }}
                        id={`${el.id}-note-body`}
                        className="ring-amber-400 focus:ring-4 focus:outline-none focus:border-black border-opacity-70 focus:border-2"
                        // placeholder={defaultContent}
                        placeholder={placeholder}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") onSetIsNotEdit();
                        }}
                    />
                    <div className="opacity-40 text-xs flex items-center">
                        {content === localStorage.getItem(LOCAL_STORAGE_KEY + "." + el.id) ? (
                            <>
                                <span className="leading-none">All changes updated</span>
                                <CheckBadgeIcon className="w-4 h-4 ml-2" />
                            </>
                        ) : isSaved ? (
                            "Saved"
                        ) : (
                            "Saving..."
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Item;
