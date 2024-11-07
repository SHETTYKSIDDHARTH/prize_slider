// import React, { useState, useEffect } from 'react';
// import './cpp.css';

// import img1 from './img/img1.png';
// import img2 from './img/img2.png';
// import img3 from './img/img3.png';
// import img4 from './img/img4.png';
// import img5 from './img/img5.png';

// const images = [img1, img2, img3, img4, img5];

// const textData = [
//     { title: "Berry Bliss Pie", description: "A luscious blend of ripe berries nestled in a flaky, buttery crust..." },
//     { title: "Strawberry Symphony Cake", description: "Indulge in the delightful harmony of flavors with our strawberry cake..." },
//     { title: "Vanilla Dream Delight", description: "A classic favorite with a rich vanilla bean flavor that’s smooth and creamy..." },
//     { title: "Chocolate Fantasy", description: "Dark and decadent, this chocolate cake is a treat for true chocolate lovers..." },
//     { title: "Lemon Tart Bliss", description: "A refreshing twist with zesty lemon filling, encased in a crisp, golden crust..." }
// ];

// function CircularSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="circular-slider">
//             <div className="container">
//                 {textData.map((item, index) => (
//                     <div className={`text ${index === currentIndex ? 'active' : ''}`} key={index}>
//                         <h1>{item.title}</h1>
//                         <p>{item.description}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="slider">
//                 <div className="indicator"></div>
//                 <div className="menu">
//                     {textData.map((item, index) => (
//                         <div key={index}>
//                             <span>{item.title.split(" ")[0]}</span>
//                         </div>
//                     ))}
//                 </div>
//                 <div
//                     className="img"
//                     style={{ backgroundImage: `url(${images[currentIndex]})` }}
//                 ></div>
//             </div>
//         </section>
//     );
// }

// export default CircularSlider;


// import React, { useState, useEffect } from 'react';
// import './cpp.css';

// import img1 from './img/img1.png';
// import img2 from './img/img2.png';
// import img3 from './img/img3.png';
// import img4 from './img/img4.png';
// import img5 from './img/img5.png';

// const images = [img1, img2, img3, img4, img5];

// const textData = [
//     { title: "Berry Bliss Pie", description: "A luscious blend of ripe berries nestled in a flaky, buttery crust..." },
//     { title: "Strawberry Symphony Cake", description: "Indulge in the delightful harmony of flavors with our strawberry cake..." },
//     { title: "Vanilla Dream Delight", description: "A classic favorite with a rich vanilla bean flavor that’s smooth and creamy..." },
//     { title: "Chocolate Fantasy", description: "Dark and decadent, this chocolate cake is a treat for true chocolate lovers..." },
//     { title: "Lemon Tart Bliss", description: "A refreshing twist with zesty lemon filling, encased in a crisp, golden crust..." }
// ];

// function CircularSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isFading, setIsFading] = useState(false); // New state to control fading effect

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIsFading(true); // Start fading out

//             setTimeout(() => {
//                 // After fade-out, update image
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//                 setIsFading(false); // Start fading in
//             }, 500); // Fade-out duration

//         }, 3000); // Image change interval

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="circular-slider">
//             <div className="container">
//                 {textData.map((item, index) => (
//                     <div className={`text ${index === currentIndex ? 'active' : ''}`} key={index}>
//                         <h1>{item.title}</h1>
//                         <p>{item.description}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="slider">
//                 <div className="indicator"></div>
//                 <div className="menu">
//                     {textData.map((item, index) => (
//                         <div key={index}>
//                             <span>{item.title.split(" ")[0]}</span>
//                         </div>
//                     ))}
//                 </div>
//                 <div
//                     className="img"
//                     style={{
//                         backgroundImage: `url(${images[currentIndex]})`,
//                         opacity: isFading ? 0 : 1, // Fade in or out based on isFading
//                         transition: 'opacity 0.5s ease-in-out', // Control opacity transition
//                     }}
//                 ></div>
//             </div>
//         </section>
//     );
// }

// export default CircularSlider;



import React, { useState, useEffect } from 'react';
import './cpp.css';

import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';

const images = [img1, img2, img3, img4, img5];

const textData = [
    { title: "Berry Bliss Pie", description: "A luscious blend of ripe berries nestled in a flaky, buttery crust..." },
    { title: "Strawberry Symphony Cake", description: "Indulge in the delightful harmony of flavors with our strawberry cake..." },
    { title: "Vanilla Dream Delight", description: "A classic favorite with a rich vanilla bean flavor that’s smooth and creamy..." },
    { title: "Chocolate Fantasy", description: "Dark and decadent, this chocolate cake is a treat for true chocolate lovers..." },
    { title: "Lemon Tart Bliss", description: "A refreshing twist with zesty lemon filling, encased in a crisp, golden crust..." }
];

function CircularSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); // Start fading out both text and image

            setTimeout(() => {
                // After fade-out, update index
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFading(false); // Start fading in new text and image
            }, 500); // Match fade duration here

        }, 3000); // Sync timing with interval

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="circular-slider">
            <div className="container">
                {textData.map((item, index) => (
                    <div
                        className={`text ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                        style={{
                            opacity: isFading && index === currentIndex ? 0 : 1, // Apply fade to current text
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    >
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="slider">
                <div className="indicator"></div>
                <div className="menu">
                    {textData.map((item, index) => (
                        <div key={index}>
                            <span>{item.title.split(" ")[0]}</span>
                        </div>
                    ))}
                </div>
                <div
                    className="img"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        opacity: isFading ? 0 : 1, // Sync fade with image
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                ></div>
            </div>
        </section>
    );
}

export default CircularSlider;
