import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="footer1">
                <p>我們相信，透過創新的科技解決方案能夠為企業和消費者創造更大的價值，同時促進環境保護和實現可持續發展。ScLinknique不僅是一個產品或服務，它是一種致力於提高效率、保障信息安全、支持環保理念的信念體現。</p>
            </div>
            <div className="footer2"> 
                <div className="footer5"> 
                    <Link to="/">
                        <img src="./img/logo-large.svg" alt="logo"></img>
                    </Link>
                    <div className="footer6">
                        <p className="p1">Scanique</p>
                        <p className="p2">© 2024 SHIMINE INC. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
                <div className="footer3">
                    <span>
                        <p>Email<Link to="mailto:service@shimine.com"> service@shimine.com</Link></p>
                    </span>
                    <span>
                        <p>Number<Link to="tel:(+886)658702473">(+886) 658702473</Link></p>
                    </span>
                </div>
                <div className="footer4">
                    <span>
                        <p>Email<Link to="mailto:service@shimine.com"> service@shimine.com</Link></p>
                    </span>
                    <span>
                        <p>Number<Link to="tel:(+886)658702473">(+886) 658702473</Link></p>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer