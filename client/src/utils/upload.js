import newRequest from "./newRequest";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "FarmFlow");

  try {
    const res = await newRequest.post("cloudinary://941527458264755:xdYdrLThr0vKqs0pHBQpil8AMK8@dwk5hmz2o" , data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
