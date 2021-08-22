import { useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import ReactImageFallback from "react-image-fallback";

export const Img = ({ src, alt, size }) => {
    const [loadingImg, setLoadingImg] = useState(true)

    return <>
        {
            loadingImg && <div
                className={`placeholder image ${size}`}
            >
                <object
                    className={`svg ${size}`}
                    type="image/svg+xml"
                    data="/assets/placeholder-circle.svg">
                </object>
            </div>
        }
        <div style={{ display: loadingImg ? 'none' : 'block', width: '100%' }}>
        <Zoom>
            <ReactImageFallback
                className={`image ${size}`}
                src={src}
                alt={alt}
                loading="lazy"
                fallbackImage="/assets/placeholder.png"
                onLoad={() => setLoadingImg(false) }
                onError={() => {
                    setLoadingImg(false)
                }}
            />
        </Zoom>
        </div>
    </>
}