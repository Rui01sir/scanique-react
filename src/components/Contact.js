import React from 'react'


function Contact() {
    return (
        <div>
            <div className="content">
                <div className="form-1">
                    <div className="form-2">
                        <h2>協助我們更好地了解您的需求</h2>
                        <p>我們的客戶服務團隊樂於提供專業指導。請分享您的業務背景，讓我們為您指引正確的方向。</p>
                    </div>
                    <img src="./img/contact-image.svg" alt="form-image"></img>
                </div>
                <form action="" className='form-11'>
                    <div className="form-3">
                        <h4>請告訴我們您的業務情況</h4>
                        <p>只需提供幾項基本信息即可</p>
                    </div>
                    <div className="form-4">
                        <div className="form-5" style={{ paddingRight: "10px" }}>
                            <label htmlFor="lastname">名字</label>
                            <input type="text" id="lastname" name="lastname" placeholder="請輸入名字" required />
                        </div>
                        <div className="form-5">
                            <label htmlFor="firstname">姓氏</label>
                            <input type="text" id="firstname" name="firstname" placeholder="請輸入姓氏" required />
                        </div>
                    </div>
                    <div className="form-6">
                        <label htmlFor="email">工作信箱</label>
                        <input type="email" id="email" name="email" placeholder="請輸入電子郵件地址" required />
                    </div>
                    <div className="form-6">
                        <label htmlFor="company">工作名稱</label>
                        <input type="company" id="company" name="company" placeholder="請輸入公司名稱" required />
                    </div>
                    <div className="form-4">
                        <div className="form-5" style={{ paddingRight: "10px" }}>
                            <label htmlFor="industry">產業類別</label>
                            <select name="industry" id="industry" required>
                                <option value="">請選擇產業別</option>
                                <option value="1">醫療業</option>
                                <option value="2">科技業</option>
                                <option value="3">教育業</option>
                                <option value="4">金融業</option>
                                <option value="4">媒體業</option>
                            </select>
                        </div>
                        <div className="form-5">
                            <label htmlFor="price">產品單價範圍</label>
                            <select name="price" id="price" required>
                                <option value="">請選擇價格範圍</option>
                                <option value="1">1000-5000</option>
                                <option value="2">5000-10000</option>
                                <option value="3">10000-50000</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-6">
                        <label htmlFor="question">問題概述</label>
                        <input className="input-1" type="question" id="question" name="question" placeholder="請輸入標題" required />
                    </div>
                    <button type="submit" className="btn">提交</button>
                </form>
            </div>
        </div>
    )
}

export default Contact