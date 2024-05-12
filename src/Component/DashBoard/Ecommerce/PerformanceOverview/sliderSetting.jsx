export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
        {
            breakpoint: 1892,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1533,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1, infinite: true,
            }
        },
        {
            breakpoint: 1007,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1, infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1, infinite: true,
            }
        },
    ]
};