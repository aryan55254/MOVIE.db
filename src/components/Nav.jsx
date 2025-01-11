import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black w-full fixed top-0 left-0 z-50 h-16">
            <div className="flex justify-between items-center pt-2 px-4 md:px-8 lg:pl-48">
                <div>
                    <span className="text-glow hover:text-shine font-bebas text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        MOVIE.DB
                    </span>
                </div>

                {/* Mobile menu toggle */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden rounded-sm hover:text-purple-500 text-white p-2">
                    <span className="my-1 block w-8 h-0.5 bg-white"></span>
                    <span className="my-1 block w-8 h-0.5 bg-white"></span>
                    <span className="my-1 block w-8 h-0.5 bg-white"></span>
                </button>

                {/* Desktop menu */}
                <div className="hidden lg:flex justify-around p-2 mr-32">
                    <NavLink to="./">
                        <button className="mx-3 text-xl rounded-sm text-white font-bebas hover:text-slate-400 hover:text-shine font-semibold">HOME</button>
                    </NavLink>
                    <NavLink to="./browsing">
                        <button className="mx-3 text-xl hover:text-shine rounded-sm text-white font-bebas font-semibold hover:text-slate-400">BROWSE MOVIES</button>
                    </NavLink>
                    <NavLink to="./trending">
                        <button className="mx-3 hover:text-shine font-bebas text-xl text-white font-semibold hover:text-slate-400 rounded-sm">TRENDING MOVIES</button>
                    </NavLink>
                    <NavLink to="./watchlist">
                        <button className="mx-3 hover:text-shine font-bebas text-xl text-white font-semibold hover:text-slate-400 rounded-sm">WATCHLIST</button>
                    </NavLink>
                </div>

                {/* Mobile menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 left-76 right-0 bg-black w-48 rounded-md border-t font-bold opacity-90 border-gray-800`}>
                    <div className="flex flex-col p-4">
                        <NavLink to="./">
                            <button className="py-3 text-shine text-xl text-white font-bebas hover:text-slate-400 font-semibold text-left">HOME</button>
                        </NavLink>
                        <NavLink to="./browsing">
                            <button className="py-3 text-xl text-white font-bebas hover:text-slate-400 text-shine font-semibold text-left">BROWSE MOVIES</button>
                        </NavLink>
                        <NavLink to="./trending">
                            <button className="py-3 text-xl text-shine text-white font-bebas hover:text-slate-400 font-semibold text-left">TRENDING MOVIES</button>
                        </NavLink>
                        <NavLink to="./watchlist">
                            <button className="py-3 text-xl text-shine text-white font-bebas hover:text-slate-400 font-semibold text-left">WATCHLIST</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
