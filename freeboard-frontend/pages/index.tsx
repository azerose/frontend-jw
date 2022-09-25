import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [imgUrls, setImgUrls] = useState("");

  useEffect(() => {
    const onGetImage = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImgUrls(result.data.message);
    };
    void onGetImage();
  }, []);

  return (
    <>
      <img src={imgUrls} />
    </>
  );
}
