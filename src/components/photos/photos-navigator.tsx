import type { ComponentProps } from "react";
import Skeleton from "../ui/skeleton";
import ButtonIcon from "../ui/button-icon";
import ArrowLeftIcon from "@/assets/icons/chevron-left.svg?react";
import ArrowRightIcon from "@/assets/icons/chevron-right.svg?react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

interface PhotosNavigatorProps extends ComponentProps<"div"> {
  previousPhotoId?: string;
  nextPhotoId?: string;
  loading?: boolean;
}

export default function PhotosNavigator({
  previousPhotoId,
  nextPhotoId,
  loading,
  className,
  ...props
}: PhotosNavigatorProps) {
  const navigate = useNavigate();
  return (
    <div className={cx("flex gap-2", className)} {...props}>
      {!loading ? (
        <>
          <ButtonIcon
            icon={ArrowLeftIcon}
            variant="secondary"
            size="md"
            className="cursor-pointer"
            disabled={!previousPhotoId}
            onClick={() => navigate(`/fotos/${previousPhotoId}`)}
          />
          <ButtonIcon
            icon={ArrowRightIcon}
            variant="secondary"
            size="md"
            className="cursor-pointer"
            disabled={!nextPhotoId}
            onClick={() => navigate(`/fotos/${nextPhotoId}`)}
          />
        </>
      ) : (
        <>
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-20 h-10" />
        </>
      )}
    </div>
  );
}
