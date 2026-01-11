"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IProduct } from "../../../domain/interfaces/IProduct.interface";
import DownloadModal from "../../components/DownloadModal/DownloadModal";
import ProductAttribution from "../../components/ProductAttribution/ProductAttribution";
import Breadcrumbs from "@/modules/shared/ui/components/Breadcrumbs/Breadcrumbs";
import "./ProductCardPage.scss";

interface ProductCardPageProps {
  product: IProduct;
}

function ProductCardPage({ product }: ProductCardPageProps) {
  const router = useRouter();
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showAudioModal, setShowAudioModal] = useState(false);

  // Sprawdzenie czy produkt ma audio (zamiast gettera z klasy)
  const hasAudio = product.audioFormats && Object.keys(product.audioFormats).length > 0;

  const handleDownload = () => {
    setShowDownloadModal(true);
  };

  const handleAudioDownload = () => {
    setShowAudioModal(true);
  };

  return (
    <div className="product-card-page">
      <div className="container">
        <Breadcrumbs currentLabel={product.name} />
        
        <button
          onClick={() => router.back()}
          className="product-card-page__back-link"
        >
          ← Powrót
        </button>

        <div className="product-card-page__details">
          <div className="product-card-page__image-section">
            <img
              className="product-card-page__main-image"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-card-page__info-section">
            <h2>{product.author}</h2>
            <h1>{product.name}</h1>

            <div className="product-card-page__description-section">
              <h3>Opis lektury</h3>
              <div
                className="product-card-page__description-content"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <ProductAttribution product={product} />

            <div className="product-card-page__actions">
              <button
                onClick={handleDownload}
                className="product-card-page__read-button"
              >
                Przeczytaj książkę
              </button>

              {hasAudio && (
                <button
                  onClick={handleAudioDownload}
                  className="product-card-page__audio-button"
                >
                  Posłuchaj audiobooka
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showDownloadModal && (
        <DownloadModal
          product={product}
          onClose={() => setShowDownloadModal(false)}
        />
      )}

      {showAudioModal && (
        <DownloadModal
          product={product}
          onClose={() => setShowAudioModal(false)}
          title="Wybierz format audiobooka"
          formats={product.audioFormats}
        />
      )}
    </div>
  );
}

export default ProductCardPage;
