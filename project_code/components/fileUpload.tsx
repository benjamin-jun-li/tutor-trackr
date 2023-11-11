"use client"
import {FC} from "react";
import { UploadDropzone } from "@/lib/uploadthing";
interface fileUploadProps {
    onChange: (url?: string) => void,
    value: string;
    endpoint: "profileImage" | "courseThumbnail"
}
const FileUpload:FC<fileUploadProps> = ({
    onChange,
    value,
    endpoint
}) => {

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].fileUrl);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    )
}

export default FileUpload
