
import Header from '../../components/Header/Header';

function VideoUploadPage(props) {
    return (
        <div>
            <Header/>
            <h2>Upload Video</h2>
            <p>VIDEO THUMBNAIL</p>
            <img src="" alt="" />
           <form action="">
            <div className='form_group' >
                <label htmlFor="title">TITLE YOUR VIDEO</label>
               <input type="text" name="title" id="title" className='form_control'/>

            </div>
            <div className='form-group' >
                <label htmlFor="desc">ADD A VIDEO DESCRIPTION</label>
                <input type="text" name="desc" id="desc" className='form_control' />

            </div>
           </form>
           <button className=''> PUBLISH </button>
           <div>CANCEL</div>
        </div>
    );
}

export default VideoUploadPage;