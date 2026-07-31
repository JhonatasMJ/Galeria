export function fileUrl(file: FileList) {
    return file?.[0] ? URL.createObjectURL(file[0]) : undefined;
}
