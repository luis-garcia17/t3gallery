import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(Number(photoId));
  return (
    <Modal>
      <FullPageImageView id={Number(photoId)} />
    </Modal>
  );
}
