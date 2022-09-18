import NextImage, { ImageProps, StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

interface StaticRequire {
  default: StaticImageData
}

export type StaticImport = StaticRequire | StaticImageData

interface ImageData extends Omit<ImageProps, 'src'> {
  alt: string
  width?: number
  height?: number
  style?: object
}

interface ImageSrcProps extends ImageData {
  src: string | StaticImport
}

interface ImageUrlProps extends ImageData {
  url: string
}

type ImageProp = ImageSrcProps | ImageUrlProps

/**
 * `url`은 반드시 NCNC-BENEFITS 버킷의 CloudFront domain을 사용해야 합니다.
 *
 * 이 외의 주소는 `next.config.js`의 `images.domain` 배열에 추가 후 사용하세요.
 */
const Image = (imageProps: ImageProp) => {
  const { style } = imageProps

  const [src, setSrc] = useState<string | StaticImport | null>(null)

  useEffect(() => {
    setSrc('url' in imageProps ? imageProps.url : imageProps.src)
  }, [])

  return <>{src && <NextImage src={src} style={style} {...imageProps} />}</>
}

export default Image
