"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import "./DownloadModal.scss";

import { IProduct } from "../../../domain/interfaces/IProduct.interface";

interface DownloadModalProps {
  product: IProduct;
  onClose: () => void;
  title?: string;
  formats?: any;
}

function DownloadModal({
  product,
  onClose,
  title,
  formats,
}: DownloadModalProps) {
  const t = useTranslations("downloadModal");
  const [selectedFormat, setSelectedFormat] = useState<any>(null);

  const formatsToDisplay = formats || (product && product.formats);
  if (!formatsToDisplay) return null;

  const availableFormats = Object.entries(formatsToDisplay).filter(
    ([_, val]) => {
      if (Array.isArray(val)) return val.length > 0;
      return !!val;
    },
  );

  const handleFormatClick = (key: string, val: any, e: React.MouseEvent) => {
    if (Array.isArray(val)) {
      e.preventDefault();
      setSelectedFormat({ key, files: val });
    }
  };

  const handleBack = () => {
    setSelectedFormat(null);
  };

  return (
    <div className="download-modal" onClick={onClose}>
      <div
        className="download-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="download-modal__close" onClick={onClose}>
          &times;
        </button>

        {!selectedFormat ? (
          <>
            <h2>{title || t("title")}</h2>
            <p>
              {t("book")} <strong>{product.name}</strong>
            </p>

            <div className="download-modal__formats-list">
              {availableFormats.length > 0 ? (
                availableFormats.map(([key, val]) => (
                  <a
                    key={key}
                    href={Array.isArray(val) ? "#" : (val as string)}
                    target={Array.isArray(val) ? undefined : "_blank"}
                    rel={Array.isArray(val) ? undefined : "noopener noreferrer"}
                    className="download-modal__format-link"
                    onClick={(e) => handleFormatClick(key, val, e)}
                  >
                    {t("download", { format: key.toUpperCase() })}
                  </a>
                ))
              ) : (
                <p className="download-modal__no-formats">
                  {t("noFormats")}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="download-modal__header-actions">
              <button
                className="download-modal__back-button"
                onClick={handleBack}
              >
                {t("back")}
              </button>
              <h2>{t("format", { format: selectedFormat.key.toUpperCase() })}</h2>
            </div>
            <p>{t("selectFile")}</p>
            <div className="download-modal__files-list">
              {selectedFormat.files.map((file: any, index: number) => (
                <a
                  key={index}
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-modal__file-link"
                >
                  <span className="download-modal__file-name">{file.name}</span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DownloadModal;
