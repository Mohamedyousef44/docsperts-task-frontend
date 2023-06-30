import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="top_header">
            <section>
                <span><i className="bi bi-geo-alt-fill"></i></span>
                <span>66 st, Sidibeshr, Alexandria, Egypt</span>             
            </section>
            <section>
                <span><i className="bi bi-telephone"></i></span>
                <span>(+20) 1285287955</span>
            </section>
            <section>
                <span><i className="bi bi-envelope"></i></span>
                <span>13mohamed.yossef@gmail.com</span>
            </section>
        </div>
        <span className="border-shape"></span>
        <div className="bottom_content">
            <section>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href ="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-telegram"></i></a>
            </section>
            <section>
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Order</a>
                <a href="#">Retail</a>
                <a href="#">Member</a>
                <a href="#">Contact Us</a>
            </section>
        </div>
        <div className="copyright">
            Copyright © 2023 booktopia - All rights reserved 
        </div>
    </footer>
  )
}
