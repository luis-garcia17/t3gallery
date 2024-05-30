import FullPageImageView from "~/components/full-image-page";

import { getImage } from "~/server/queries";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(Number(photoId));
  return (
      <FullPageImageView id={Number(photoId)} />
  );
}
