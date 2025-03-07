import React from "react";
import { Link, useLocation } from "react-router-dom";
import banner from "../assets/hero.jpg";
import logo from "../assets/python.png";
import "../fontawesome-free-6.7.2-web/css/all.css";
import "../index.css";

export default function CourseInfo() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const courseId = params.get("id"); // Query param orqali ID olish


    return (
        <div className="relative w-full h-screen bg-gray-100 flex justify-center">
            <img src={banner} alt="" className="w-full h-1/3 object-cover absolute top-0 left-0" />
            <div className="info-box pt-60 overflow-y-scroll gap-5 w-full h-full absolute p-6 flex flex-col justify-center" style={{ background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(10,135,167,1) 72%, rgba(0,212,255,0) 100%)" }}>
                <img src={logo} className="w-40 h-40 drop-shadow-2xl" alt="" />
                <h2 className="title text-white text-6xl font-semibold">Python: dasturlash asoslari</h2>
                <span className="text-white text-lg gap-3 flex items-center">
                    <i className="fas fa-user"></i>
                    <Link className="text-cyan-300">Otabek Burhonov</Link>
                </span>
                <div class="box text-white h-max p-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui itaque hic recusandae eaque, iure cupiditate odit? Non mollitia suscipit excepturi ipsam, voluptates dicta enim, sint itaque molestiae iure amet debitis blanditiis, laboriosam in. Saepe, obcaecati molestias quisquam eveniet vel voluptates cum provident earum dolore magnam inventore voluptate, sed officia repudiandae corporis? Odit, aliquid magnam necessitatibus ut corrupti dolorum laborum. Deserunt laboriosam dolorem veniam excepturi iusto id! Officia iusto dolores saepe ex, impedit laboriosam vitae reiciendis id, facilis at ab.
                </div>
                <div className="more gap-10 flex items-center text-lg">
                    <div className="rate flex items-center gap-2 text-white">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <span className="text-white flex items-center gap-2">
                        <i className="fas fa-user-group"></i>
                        4 500 tugatgan
                    </span>
                </div>

                <button className="text-white w-max bg-cyan-300 text-xl px-5 py-2  rounded-lg cursor-pointer transition-all duration-500 hover:opacity-75">Kursni olish</button>

                <h3 className="text-white text-4xl mt-10 font-semibold">Kurs haqida fikrlar</h3>
                <div className="comments w-full mt-2 h-20 flex flex-col gap-4 p-4">
                    <div className="comment  w-full h-max p-4 flex flex-col gap-2">
                        <Link className="user flex items-center gap-2">
                            <img src="https://picsum.photos/200/200" alt="" className="w-7 h-7 rounded-full" />
                            <span className="text-white text-lg">Otabek Burhonov</span> 
                        </Link>

                        <span className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil officia nostrum recusandae consequatur voluptas quaerat, impedit unde voluptate. Nihil, maiores. Officiis exercitationem fuga voluptates commodi sed vero eaque sint? </span>
                    </div>

                    <div className="comment w-full h-max p-4 flex flex-col gap-2">
                        <Link className="user flex items-center gap-2">
                            <img src="https://picsum.photos/200/200" alt="" className="w-7 h-7 rounded-full" />
                            <span className="text-white text-lg">Otabek Burhonov</span> 
                        </Link>

                        <span className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil officia nostrum recusandae consequatur voluptas quaerat, impedit unde voluptate. Nihil, maiores. Officiis exercitationem fuga voluptates commodi sed vero eaque sint? </span>
                    </div>

                    <div className="comment w-full h-max p-4 flex flex-col gap-2">
                        <Link className="user flex items-center gap-2">
                            <img src="https://picsum.photos/200/200" alt="" className="w-7 h-7 rounded-full" />
                            <span className="text-white text-lg">Otabek Burhonov</span> 
                        </Link>

                        <span className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil officia nostrum recusandae consequatur voluptas quaerat, impedit unde voluptate. Nihil, maiores. Officiis exercitationem fuga voluptates commodi sed vero eaque sint? </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

