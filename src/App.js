import { useRef } from 'react';
import './App.css';


function App() {
  const inputRef = useRef(null)
  function GetURL(urlString) {
    var query = urlString.get("e-hentai_url")
    var deprefix = query.replace("https://", "")
    deprefix = deprefix.replace("e-hentai.org/g/", "")
    var gid = deprefix.substr(0, deprefix.indexOf("/"))
    var token = deprefix.replace(gid, "").replaceAll("/", "")
    console.log(gid + " " + token)
    inputRef.current.value = "http://axcwg.github.io/e-hentai_embed_js?gid="+gid+"&token=" + token
  }
  return (
    <div className='center-screen container p-3' style={{ maxWidth: "50rem" }}>

      <div className='container-fluid p-4' style={{ backgroundColor: "gray", zoom: 1.2 }}>
        <form className=' mt-3 mb-3  container-fluid-sm' action={GetURL} >
          <div className='row'>
            <div className='col-sm-8 ' style={{}}>
              <input type='text' name='e-hentai_url' placeholder='贴入你想分享的 e-hentai 画廊地址' className='form-control' style={{ width: "100%", }}></input>

            </div>
            <div className='col-sm-4' style={{}}>
              <button type='submit' className='btn btn-primary ' style={{ width: "100%", }}>提交</button>

            </div>
          </div>

        </form>
        <input ref={inputRef} disabled="true" type='text' name='ehembed_url' placeholder='输出'  className=' form-control mt-3' ></input>


        <label className='form-label'></label>
      </div>
    </div>

  );
}

export default App;
