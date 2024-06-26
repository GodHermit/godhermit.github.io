export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ['c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/dxdbr2wtz/image/upload/${params.join(
    ','
  )}/${src}`;
}
