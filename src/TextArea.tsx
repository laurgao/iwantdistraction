import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AutoresizingTextarea from "./AutoresizingTextarea";
import Linkify from "./Linkify";
import { useInterval } from "./utils/hooks";
import { waitForEl } from "./utils/utils";

// const TextArea = ({ content, setContent, id }: { content: string; setContent: Dispatch<SetStateAction<string>>; id: string }) => {
const TextArea = ({ id }: { id: string }) => {
    const LOCAL_STORAGE_KEY = "iwantdistraction";
    const [content, setContent] = useState(localStorage.getItem(LOCAL_STORAGE_KEY + "." + id) || "");
    const [isEdit, setIsEdit] = useState(false);
    const [isSaved, setIsSaved] = useState(true);
    const canEdit = true;

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
            localStorage.setItem(LOCAL_STORAGE_KEY + "." + id, content);
        }
    }

    return !isEdit ? (
        <div
            className={`overflow-hidden break-words text-stone-700 ${
                canEdit && "cursor-pointer hover:bg-stone-50 p-4 rounded-md transition border border-transparent"
            }`}
            onClick={() => {
                if (canEdit) {
                    setIsEdit(true);
                    waitForEl(`${id}-note-body`);
                    // toggleDisallowNShortcut(true);
                }
            }}
        >
            <Linkify options={{ className: `underline hover:bg-amber-300 transition` }}>{content}</Linkify>
        </div>
    ) : (
        /* <Input type="date" value={date} setValue={setDate} className="my-8" /> */
        <div>
            <AutoresizingTextarea
                onBlur={onSetIsNotEdit}
                type="textarea"
                value={content}
                onChange={(e) => {
                    setContent(e.target.innerText);
                    setIsSaved(false);
                }}
                id={`${id}-note-body`}
                className="ring-amber-300 focus:ring-4 focus:outline-none focus:border-stone-700 focus:border-2"
                placeholder="What were the most interesting events in today's news?"
                onKeyDown={(e) => {
                    if (e.key === "Escape") onSetIsNotEdit();
                }}
            />
            <div className="text-stone-400 text-xs flex items-center">
                {content === localStorage.getItem(LOCAL_STORAGE_KEY + "." + id) ? (
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
    );
};

export default TextArea;
