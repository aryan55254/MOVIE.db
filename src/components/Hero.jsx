import React, { useEffect, useState } from 'react';

export default function Hero() {

const [currentindex, setindex] = useState(0);

const [videoindex, setvideoindex] = useState(0);

const videos = [

'./src/videos/cn.mp4',
'./src/videos/fc.mp4',

];

const taglines = [
    { text: "Discover, Rate, and Save Your Favorites" },
    { text: "Your Go-To Hub for Movie Reviews and Watchlists" },
    { text: "Explore. Review. Add to Watchlist." },
    { text: "Every Movie, One Click Away" },
    { text: "Find, Review, and Bookmark Your Next Watch" },
    { text: "The Ultimate Movie Experience Starts Here" },
    { text: "Rate Movies, Build Your Watchlist" },
    { text: "Cinema at Your Fingertips" },
    { text: "Where Movie Lovers Unite" },
    { text: "Uncover Hidden Gems, One Review at a Time" },
    { text: "Save Your Favorites, Relive the Magic" },
    { text: "Your Personal Guide to the World of Film" }
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

<h1 className=" p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bebas text-shine text-center font-bold bg-gradient-to-r from-indigo-500 via-pink-600 to-red-700 drop-shadow-lg bg-clip-text text-transparent lg:text-8xl text-6xldrop-shadow-[0_0_10px_rgba(99,102,241,1)] drop-shadow-[0_0_20px_rgba(219,39,119,1)] drop-shadow-[0_0_30px_rgba(220,38,38,1)] lg:text-8xl text-6xl">

{taglines[currentindex].text}

</h1>

</div>

);

}