import './items.css'
const Information = [
    {
        id:1,
        image: "/images/cabbage.png",
        info: "Cabbage contains phytonutrients that act as antioxidants to reduce your risk of certain cancers.",
        title: "Cabbage",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 1.5,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:2,
        image: "/images/carrot.png",
        info: "They're rich in beta-carotene, a compound your body changes into vitamin A, which helps keep your eyes healthy.",
        title: "Carrot",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",    
        price: 1.9,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:3,
        image: "/images/potato.png",
        info: "Potatoes were a life-saving food source in early times because the vitamin C prevented scurvy",
        title: "Potato",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 2.99,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:4,
        image: "/images/onion.png",
        info: "They have antioxidant and anti-inflammatory effects and have been linked to a reduced risk of cancer.",
        title: "Onion",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 2,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:5,
        image: "/images/pumpkin.png",
        info: "Rich in vitamins, minerals and antioxidants, pumpkin is incredibly healthy.",
        title: "Pumpkin",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 1.49,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:6,
        image: "/images/tomato.png",
        info: "Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer.",
        title: "Tomato",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 2.49,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:7,
        image: "/images/capsicum.png",
        info: "Capsicum is extremely high in vitamin C which is essential for many processes in the body including immune function, wound healing and the synthesis of collagen",
        title: "Capsicum",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 1.99,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:8,
        image: "/images/bitterguard.png",
        info: "Bitter gourd reduces several blood-sugar control markers, including hemoglobin A1c and fructosamine.",
        title: "Bittergourd",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 2.39,
        cart_button:"Add",
        quantity:1,
    },
    {
        id:9,
        image: "/images/lemon.png",
        info: "Lemons are high in vitamin C, fiber, and various beneficial plant compounds.",
        title: "Lemon",
        rating: <div className='stars_icon'>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>,
        dollar : "$",
        price: 1.89,
        cart_button:"Add",
        quantity:1,
    },
    // {
    //     id:10,
    //     image: "/images/cabbage.png",
    //     info: "Cabbage contains phytonutrients that act as antioxidants to reduce your risk of certain cancers.",
    //     title: "Cabbage",
    //     rating: <div className='stars_icon'>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star"></span>
    //         <span class="fa fa-star"></span>
    //         </div>,
    //     price: 300,
    //     cart_button:"Add",
    //     quantity:1,
    // },
    // {
    //     id:11,
    //     image: "/images/cabbage.png",
    //     info: "Cabbage contains phytonutrients that act as antioxidants to reduce your risk of certain cancers.",
    //     title: "Cabbage",
    //     rating: <div className='stars_icon'>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star"></span>
    //         <span class="fa fa-star"></span>
    //         </div>,
    //     price: 400,
    //     cart_button:"Add",
    //     quantity:1,
    // },
    // {
    //     id:12,
    //     image: "/images/cabbage.png",
    //     info: "Cabbage contains phytonutrients that act as antioxidants to reduce your risk of certain cancers.",
    //     title: "Cabbage",
    //     rating: <div className='stars_icon'>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star checked"></span>
    //         <span class="fa fa-star"></span>
    //         <span class="fa fa-star"></span>
    //         </div>,
    //     price: 100,
    //     cart_button:"Add",
    //     quantity:1,
    // },

];

export default Information;