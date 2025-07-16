import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import {
  addFeatureImage,
  getFeatureImages,
  deleteFeatureImage,
} from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Trash2Icon } from "lucide-react";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const { toast } = useToast();

  // Upload handler
  function handleUploadFeatureImage() {
    if (!uploadedImageUrl) {
      toast({ title: "No image selected", variant: "destructive" });
      return;
    }

    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
        toast({ title: "Image uploaded successfully" });
      } else {
        toast({ title: "Upload failed", variant: "destructive" });
      }
    });
  }

  // Delete handler
  function handleDeleteImage(id) {
    dispatch(deleteFeatureImage(id)).then((res) => {
      if (res?.payload?.success) {
        dispatch(getFeatureImages());
        toast({ title: "Image deleted successfully" });
      } else {
        toast({ title: "Failed to delete image", variant: "destructive" });
      }
    });
  }

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-semibold mb-6">
        Admin Dashboard - Feature Images
      </h1>

      {/* Upload section */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-lg font-medium mb-3">Upload New Feature Image</h2>

        <ProductImageUpload
          imageFile={imageFile}
          setImageFile={setImageFile}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
          imageLoadingState={imageLoadingState}
          isCustomStyling={true}
        />

        <Button onClick={handleUploadFeatureImage} className="mt-5 w-full md:w-auto">
          Upload
        </Button>
      </div>

      {/* Feature Images Grid */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Uploaded Feature Images</h2>

        {featureImageList?.length === 0 ? (
          <p className="text-gray-500 text-center">No feature images uploaded yet.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featureImageList.map((featureImgItem) =>
              featureImgItem?.image ? (
                <div
                  key={featureImgItem._id}
                  className="relative rounded-lg shadow-lg overflow-hidden border group"
                >
                  {/* Image */}
                  <img
                    src={featureImgItem.image}
                    alt="Feature"
                    className="w-full h-60 object-cover"
                  />

                  {/* Image info */}
                  <div className="p-3 bg-white">
                    <p className="text-sm text-gray-800 truncate">
                      {featureImgItem?.image?.split("/").pop()}
                    </p>
                    <p className="text-xs text-gray-500">
                      {featureImgItem?.createdAt
                        ? format(new Date(featureImgItem.createdAt), "dd MMM yyyy")
                        : "Unknown date"}
                    </p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteImage(featureImgItem._id)}
                    className="absolute top-2 right-2 bg-white text-red-500 hover:text-red-700 rounded-full p-2 shadow-md transition"
                    title="Delete Image"
                  >
                    <Trash2Icon className="w-5 h-5" />
                  </button>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
