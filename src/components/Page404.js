import React from "react";
import { Link} from 'react-router-dom'

function Page404() {
  return (
    <div>
      <div className="content-2">
        <img src={process.env.PUBLIC_URL}+/img/icon-large/icon-large-05.svg} alt="404"></img>
        <h2>這個頁面即將上線 ！</h2>
        <p>我們的網頁正在進行調整，很快就會與大家見面～</p>
        <Link to="/"><button  className="btn-4" >
          回首頁
        </button></Link>
      </div>
    </div>
  );
}

export default Page404;
