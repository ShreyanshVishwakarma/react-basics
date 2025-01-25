import { useState,useEffect } from "react";

export default function ImageSlider({ url = "https://picsum.photos/v2/list", limit = 5 }) {
    const [Images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`${url}?page=1&limit=${limit}`);
                const data = await response.json();
                console.log(data);
                if (data && data.length > 0) {
                    setImages(data.slice(0, limit));
                    setLoading(false);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchImages();
    }, [url, limit]);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % Images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + Images.length) % Images.length);
    };

    return (
        <div className="wrapper flex justify-center items-center h-screen bg-slate-500 relative">
            {loading && <p>Loading...</p>}

            <button className="absolute left-1/4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded"
                onClick={prevSlide}
                >prev
            </button>
            
            {Images.length > 0 &&
                Images.map((image, index) => (
                    <img key={index} src={image.download_url} 
                    alt={image.author} 
                    className={`w-1/2 ${index === currentSlide ? "" : "hidden"}`} 
                    />
                ))}

            <button className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded"
                onClick={nextSlide}
                >next
            </button>

            <span className="absolute rounded-lg flex justify-center items-center bg-slate-400 bottom-9 left-1/2 transform -translate-x-1/2 space-x-6 p-2">
                {(Images.length > 0) ? (
                    Images.map((_, index) => (
                        <button key={index} className={`${currentSlide===index?("bg-white"):("bg-inherit")} text-black px-4 py-3 rounded-full`}>
                            {index + 1}
                        </button>
                    ))
                ) : null}
            </span>
        </div>
    );
}
