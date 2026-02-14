import { UploadIcon, XIcon } from "lucide-react";
import type { UploadZoneProps } from "../types";

const UploadZone = ({ label, file, onClear, onChange }: UploadZoneProps) => {
  return (
    <div className="relative group">
      <div
        className={`relative h-64 rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center bg-white/2 p-6 ${file ? "border-pink-600/50 bg-pink-500/5" : "border-white/10 hover:border-pink-500/30 hover:bg-white/5"}`}
      >
        {file ? (
          <>
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-60"
            />
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear uploaded file"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-red-500/80 text-white hover:text-white transition-all backdrop-blur-sm border border-white/10 hover:border-red-400"
            >
              <XIcon className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10 z-10">
              <p className="text-sm font-medium truncate">{file.name}</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <UploadIcon className="w-8 h-8 text-gray-400 group-hover:text-pink-400 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{label}</h3>
            <p className="text-sm text-gray-400 text-center max-w-[200px]">
              Drag & Drop or Click here to Upload
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={onChange}
              aria-label={label}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-0"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UploadZone;
