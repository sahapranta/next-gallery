import { FullPageImageView } from "~/common/full-page-image-view";

export default async function PhotoModal(
    { params: { id: photoId } }
        : { params: { id: string } }) {

    return <FullPageImageView photoId={photoId} />;
}