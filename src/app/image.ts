import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';

export default function cloudinaryLoader({
	src,
	width,
	quality,
}: {
	src: string;
	width: number;
	quality?: number;
}) {
	return new CloudinaryImage(src, { cloudName: 'dxdbr2wtz' }).resize(fill().width(width)).quality(quality || 'auto').toURL();
}