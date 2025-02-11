import { faClose, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function PreviewImage({
  handleDeleteSingle,
  handleDeleteMultiple,
  imgSrc,
}: {
  handleDeleteSingle?: () => void;
  handleDeleteMultiple?: (i: number) => void;
  imgSrc?: string | string[];
}) {
  if (!imgSrc) {
    return (
      <div className="w-32 h-32 mx-auto flex items-center justify-center bg-colorHighlight rounded-md text-slate-500 relative overflow-hidden">
        <FontAwesomeIcon className="text-2xl " icon={faImage} />
      </div>
    );
  }

  if (Array.isArray(imgSrc)) {
    if (imgSrc.length === 0) {
      return (
        <div className="w-32 h-32 mx-auto flex items-center justify-center bg-colorHighlight rounded-md text-slate-500 relative overflow-hidden">
          <FontAwesomeIcon className="text-2xl " icon={faImage} />
        </div>
      );
    }
    return (
      <div className="grid grid-cols-2 gap-2 grid-flow-row md:grid-cols-3">
        {imgSrc.map((val, index) => {
          return (
            <div
              className="w-32 h-32 overflow-hidden relative rounded-md"
              key={index}
            >
              <Image
                className=""
                src={val}
                width={128}
                height={128}
                alt="upload list product"
              ></Image>
              <button
                type="button"
                className="absolute right-0 top-0 text-lg bg-slate-300 w-7 h-7 leading-7 rounded-full"
                onClick={() => {
                  if (handleDeleteMultiple) {
                    handleDeleteMultiple(index);
                  }
                }}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-32 h-32 mx-auto flex items-center justify-center bg-colorHighlight rounded-md text-slate-500 relative overflow-hidden">
      <Image src={imgSrc} width={128} height={128} alt="thumb upload"></Image>

      {imgSrc && (
        <button
          type="button"
          className="absolute right-0 top-0 text-lg bg-slate-300 w-7 h-7 leading-7 rounded-full"
          onClick={handleDeleteSingle}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      )}
    </div>
  );
}
