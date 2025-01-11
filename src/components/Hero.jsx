import React, { useEffect, useState } from 'react';

export default function Hero() {

const [currentindex, setindex] = useState(0);

const [videoindex, setvideoindex] = useState(0);

const videos = [

'./src/videos/fc.mp4',
'./src/videos/batman.mp4'

];

const taglines = [

{ text: "Where Every Frame Tells a Story" },

{ text: "Your Universe of Cinema" },

{ text: "Rate. Review. Rewatch." },

{ text: "Every Movie. Every Moment. Every Memory." },

{ text: "Discover Your Next Favorite" },

{ text: "The Pulse of Cinema" },

{text: "Lights.Camera.Action"},

{text:  "Where Stories Come To Life"},

{

text : "Cinematic Journeys Await."

},

{ text: "For the Love of Film" },

{ text : "Discover. Watch. Relive"},

{

text:"Movies that Move You."

}

];

useEffect(() => {

const timer = setInterval(() => {

setindex((prev) => (prev + 1) % taglines.length);

}, 3000);

return () => clearInterval(timer);

}, []);

const handlevid = () => {

setvideoindex((prevIndex) => (prevIndex + 1) % videos.length);

};

return (

<div className="relative w-full h-screen overflow-hidden">

{/* Video background */}

<video

className="absolute inset-0 top-0 left-0 w-full h-full object-cover opacity-90"

src={videos[videoindex]}

type="video/mp4"

autoPlay

muted

onEnded={handlevid}

/>

{/* Rotating text */}

<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bebas text-shine text-center text-8xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-pink-600 to-red-700 bg-clip-text drop-shadow-[0_0_10px_rgba(99,102,241,1)] drop-shadow-[0_0_20px_rgba(219,39,119,1)] drop-shadow-[0_0_30px_rgba(220,38,38,1)]">

{taglines[currentindex].text}

</h1>

</div>

);

}