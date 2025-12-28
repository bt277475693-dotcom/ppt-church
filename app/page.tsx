"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isEditMode, setIsEditMode] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <button
        onClick={() => setIsEditMode(!isEditMode)}
        className="fixed right-4 top-4 rounded border-2 border-black bg-white px-4 py-2 text-sm font-medium text-black shadow-lg"
      >
        {isEditMode ? "切换到投影模式" : "切换到编辑模式"}
      </button>
      {isEditMode && (
        <div className="p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded border border-white/20 bg-white/5 p-4 text-white"
            placeholder="在此输入文字..."
          />
        </div>
      )}
      <div className="flex flex-1 items-center justify-center">
        <p className="text-white">{text || "投影画布（后续内容将显示在这里）"}</p>
      </div>
    </div>
  );
}
