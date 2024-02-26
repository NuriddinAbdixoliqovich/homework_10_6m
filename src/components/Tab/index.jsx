import { useState } from "react";

export default function Tab() {
    const [state, setState] = useState("");
    return (
      <div className="mt-96 pb-5">
        <div className="flex gap-3">
          <div
            onClick={() => setState(1)}
            className={`p-3 border-[2px] border-gray-500 ${
              state === 1 ? "bg-[green]" : ""
            }`}
          >
            ITEM ONE
          </div>
          <div
            onClick={() => setState(2)}
            className={`p-3 border-[2px] border-gray-500 ${
              state === 2 ? "bg-[green]" : ""
            }`}
          >
            ITEM TWO
          </div>
          <div
            onClick={() => setState(3)}
            className={`p-3 border-[2px] border-gray-500 ${
              state === 3 ? "bg-[green]" : ""
            }`}
          >
            ITEM THREE
          </div>
        </div>
        {state === 1 && <h2 className="mt-5">Item One</h2>}
        {state === 2 && <h2 className="mt-5">Item Two</h2>}
        {state === 3 && <h2 className="mt-5">Item Three</h2>}
      </div>
    );
  }