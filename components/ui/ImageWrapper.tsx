
import Image from "next/image";
import { ImageAsset } from "@/types";
import type { ImageProps } from "next/image";

interface ImageWrapperProps
  extends Omit<
    ImageProps,
    "src" | "alt" | "fill" | "sizes" | "onLoad" | "onError"
  > {
  image: ImageAsset;
  containerClassName?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  quality?: ImageProps["quality"];
  sizes?: string;
}

export function ImageWrapper({
  image,
  containerClassName,
  className,
  fill = false,
  priority = false,
  quality = 75,
  sizes,
  ...props
}: ImageWrapperProps) {
  return (
    <div className={containerClassName}>
      <Image
        src={image.src}
        alt={image.alt}
        width={fill ? undefined : image.width}
        height={fill ? undefined : image.height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={
          fill
            ? `absolute inset-0 h-full w-full object-cover ${className ?? ""}`
            : className
        }
        {...props}
      />
    </div>
  );
}
