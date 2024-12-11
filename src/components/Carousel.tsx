

const Carousel = () => {
    return (
        <div id="blog-carousel" className="relative" data-carousel="slide">
            <div className="relative overflow-hidden">
                <div className="carousel-inner">
                    <div className="carousel-item active relative w-full">
                        <img className="w-full h-auto" src="img/carousel-1.jpg" alt="Image" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                            <h2 className="text-primary m-0">أمانك, جهودنا</h2>
                            <h4 className="text-white text-4xl mt-2">أفضل خدمة أمنية</h4>
                            <a href="#" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">معرفة المزيد</a>
                        </div>
                    </div>
                    <div className="carousel-item relative w-full">
                        <img className="w-full h-auto" src="img/hero-bg.jpg" alt="Image" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                            <h2 className="text-primary m-0">أمانك, جهودنا</h2>
                            <h4 className="text-white text-4xl mt-2">حراس مدربون على أعلى مستوى</h4>
                            <a href="#" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">معرفة المزيد</a>
                        </div>
                    </div>
                </div>
                <a className="absolute top-1/2 left-0 transform -translate-y-1/2" href="#blog-carousel" data-slide="prev">
                    <div className="btn bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="carousel-control-prev-icon"></span>
                    </div>
                </a>
                <a className="absolute top-1/2 right-0 transform -translate-y-1/2" href="#blog-carousel" data-slide="next">
                    <div className="btn bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="carousel-control-next-icon"></span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Carousel;